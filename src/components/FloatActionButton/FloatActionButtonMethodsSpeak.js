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
      
      let loop = (i) => {
        if (this.isSpeaking === false) {
          return false
        }
        
        if (i < textParts.length) {
          msg.text = textParts[i]
          msg.rate = 1.2
          msg.onend = () => {
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
      let parts = splitMulti(text, ['。', ':', '：', '；', '\n', '\t'])
      parts = parts.filter(p => p.trim() !== '')
      
      // 移除括號內的內容
      parts = parts.map(p => {
        //return p.replace(/[\(\)']+/g,'')
        p = p.replace(/ *\([^)]*\) */g, "")
        p = p.replace(/ *\[[^)]*\] */g, "")
        p = p.replace(/ *\{[^)]*\} */g, "")
        
        p = p.replace(/ *（[^)]*） */g, "")
        //p = p.replace(/ *「[^)]*」 */g, "")
        return p
      })
      
      return parts
    }
}