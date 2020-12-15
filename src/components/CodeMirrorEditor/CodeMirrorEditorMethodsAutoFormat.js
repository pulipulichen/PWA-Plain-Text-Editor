import beautify from 'js-beautify'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.autoFormat = function (cm) {
    let mode = this.getMode()
    
    let process
    if (mode === 'javascript') {
      process = beautify.js_beautify
    }
    else if (mode === 'css') {
      process = beautify.css_beautify
    }
    else if (mode === 'html') {
      process = beautify.html_beautify
    }
    //console.log()
    
    let selection = cm.getSelection()
    if (selection === '') {
      cm.execCommand('selectAll')
      selection = cm.getSelection()
    }
    selection = process(selection, {
      indent_size: this.localConfig.indent.size
    })
    //selection = selection + 'AAA'
    cm.replaceSelection(selection);
    
    //console.log('aaa')
  }
}