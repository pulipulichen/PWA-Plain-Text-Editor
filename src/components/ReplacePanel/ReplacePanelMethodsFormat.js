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
}
    