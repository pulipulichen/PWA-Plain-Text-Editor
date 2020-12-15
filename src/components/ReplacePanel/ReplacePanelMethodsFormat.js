//import htmlMinifier from 'html-minifier-terser'
//import cssMinifier from 'css-minifiers'
//import jsmin  from "jsmin"
 
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
    else if (tool === 'code-minifiy') {
      return this.minifiyCode()
    }
    else if (tool === 'code-beautify') {
      return this.beautifyCode()
    }
  }
  
  ReplacePanel.methods.minifiyCode = async function () {
    let mode = this.CodeMirrorEditor.getMode()
    
    if (mode === 'html') {
      //this.localConfig.textContent = htmlMinifier(this.localConfig.textContent)
    }
    if (mode === 'css') {
      //this.localConfig.textContent = await cssMinifier.csso(this.localConfig.textContent)
    }
    if (mode === 'javascript') {
      this.localConfig.textContent = jsmin(this.localConfig.textContent)
    }
    
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
    