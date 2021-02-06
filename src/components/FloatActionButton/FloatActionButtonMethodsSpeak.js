import $ from 'jquery'

export default function (FloatActionButton) {
    let msg = new SpeechSynthesisUtterance();
    
    FloatActionButton.methods.speak = function () {
      this.isSpeaking = true
      let text
      if (this.hasSelectedText) {
        text = this.config.selectedText
      }
      else {
        text = this.localConfig.textContent
      }
      
      // 需要分段
      let textParts = this.splitSpeechTextToParts(text)
      
      // -------------
      
      let tooLongMessage = this.$t('The message is too long.')
      for (let i = 0, max = textParts.length; i < max; i++) {
        let text = textParts[i]
        if (text.length > 100) {
          console.error(tooLongMessage, text)
          msg.text = tooLongMessage
          msg.rate = this.localConfig.speechSynthesisRate
          this.speechSynthesis.cancel()
          this.speechSynthesis.speak(msg)
          this.isSpeaking = false
          return false
        }
      }
        
      // ------------
      
      let loop = (i) => {
        if (this.isSpeaking === false) {
          return false
        }
        
        if (i < textParts.length) {
          msg.text = textParts[i]
          msg.rate = this.localConfig.speechSynthesisRate
          //console.log(this.localConfig.speechSynthesisRate)
//          let isEnd = false
          msg.onend = () => {
//            isEnd = true
            i++
            loop(i)
          }
          
          
          //console.log(msg)
          this.speechSynthesis.cancel()
          this.speechSynthesis.speak(msg)
        }
        else {
          this.isSpeaking = false
        }
      }
      
      loop(0)
      
      this.closeMenu()
    }
    
    let splitMulti = function (str, tokens) {
      var tempChar = tokens[0]; // We can use the first token as a temporary join character
      for (var i = 1; i < tokens.length; i++) {
        str = str.split(tokens[i]).join(tempChar);
      }
      str = str.split(tempChar);
      return str;
    }
    
    FloatActionButton.methods.splitSpeechTextToParts = function (text) {
      let p = text
      p = p.replace(/ *\([^)]*\) */g, "")
      p = p.replace(/ *\[[^)]*\] */g, "")
      p = p.replace(/ *\{[^)]*\} */g, "")

      p = p.split('（').map((p2, i) => {
        if (i === 0) {
          return p2
        }

        let endPos = p2.indexOf('）')
        if (endPos === -1) {
          return ''
        }
        return p2.slice(endPos + 1)
      }).join('')
      //p = p.replace(/ *\（[^)]*\） */g, "")
      //p = p.replace(/ *（[^)]*） */g, "")
      //p = p.replace(/ *「[^)]*」 */g, "")
      text = p
      
      let parts = splitMulti(text, ['。', ':', '：', '；', '\n', '\t'])
      parts = parts.filter(p => p.trim() !== '')
      
      // ----------------------------
      // 第二階段細分
      let tempParts = []
      let subSeperators = ['、', '，']
      parts.forEach(text => {
        
        if (text.length < 100) {
          return tempParts.push(text)
        }
        
        let lastSeperator, lastSeperatorPos, lastSeperatorTempPos
        let tempText = []
        for (let i = 0, max = text.length; i < max; i++) {
          let t = text[i]
          tempText.push(t)
          
          if (tempText.length === 100) {
            if (!lastSeperatorPos) {
              tempParts.push(tempText.join(''))
              tempText = []
            }
            else {
              tempParts.push(tempText.slice(0, lastSeperatorTempPos - 1).join(''))
              i = lastSeperatorPos
              tempText = []
            }
          }
          
          if (subSeperators.indexOf(t) > -1) {
            lastSeperator = t
            lastSeperatorPos = i
            lastSeperatorTempPos = tempText.length
          }
        }
        
        if (tempText.length > 0) {
          tempParts.push(tempText.join(''))
        }
      })
      
      parts = tempParts
      // ----------------------------
      
      //console.log(parts)
      return parts
    }
}