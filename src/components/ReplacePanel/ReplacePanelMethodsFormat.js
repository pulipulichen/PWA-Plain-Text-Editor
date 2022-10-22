//import htmlMinifier from 'html-minifier-terser'
//import cssMinifier from 'css-minifiers'

 
export default function (ReplacePanel) {

  ReplacePanel.methods.doFormat = function () {
    let tool = this.localConfig.formatTool
    //console.log(tool)
    if (tool === 'lines-trim') {
      return this.trimTextContent()
    }
    else if (tool === 'lines-ltrim') {
      return this.ltrimTextContent()
    }
    else if (tool === 'lines-rtrim') {
      return this.rtrimTextContent()
    }
    else if (tool === 'remove-line-breaks') {
      return this.localConfig.textContent = this.localConfig.textContent.split('\n').join('')
    }
    else if (tool === 'code-minifiy') {
      return this.minifiyCode()
    }
    else if (tool === 'code-beautify') {
      return this.beautifyCode()
    }
    else if (tool === 'empty-lines-remove') {
      return this.removeEmptyLines()
    }
    else if (tool === 'duplicate-empty-lines-remove') {
      return this.removeDuplicateEmptyLines()
    }
    else if (tool === 'sort-lines') {
      return this.sortLines()
    }
    else if (tool === 'shuffle-lines') {
      return this.shuffleLines()
    }
  }
  
  ReplacePanel.methods.minifiyCode = async function () {
    this.$parent.$refs.CodeMirrorEditor.minify()
    //console.log(mode)
    
    
    //console.error('minifiyCode')
    //let result = await minify(this.localConfig.textContent)
    //console.log(result)
    //this.localConfig.textContent = result
  }
  
  ReplacePanel.methods.beautifyCode = function () {
    //console.error('beautifyCode')
    this.$parent.$refs.CodeMirrorEditor.autoFormat()
    //console.log()
    this.isModifiedAfterBeautification = false
  }


  ReplacePanel.methods.sortLines = function () {
    this.removeEmptyLines()

    if (this.textContentLines.length < 2) {
      return false // 不需要排序
    }

    let lines = [].concat(this.textContentLines)
    lines.sort()
    if (lines[0] === this.textContentLines[0]) {
      lines.reverse()
    }
    
    this.localConfig.textContent = lines.join('\n')
  }
  
  ReplacePanel.methods.shuffleLines = function () {
    this.removeEmptyLines()

    if (this.textContentLines.length < 2) {
      return false // 不需要排序
    }

    let lines = [].concat(this.textContentLines)
    
    let shuffled
    while (true) {
      shuffled = lines
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

      let done = false
      for (let i = 0; i < shuffled.length; i++) {
        if (shuffled[i] !== this.textContentLines[i]) {
          done = true
          break
        }
      }

      if (done) {
        break
      }
    }
     
    this.localConfig.textContent = shuffled.join('\n')
  }
}
    