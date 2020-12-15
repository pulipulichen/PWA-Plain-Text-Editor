import beautify from 'js-beautify'
import {jsmin} from "jsmin"
import cssmin from "cssmin"

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.autoFormat = function () {
    //console.log('autoFormat')
    let cm = this.codemirror
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
  
  CodeMirrorEditor.methods.minify = function () {
    let cm = this.codemirror
    let mode = this.getMode()
    
    //console.log()
    
    cm.execCommand('selectAll')
    let selection = cm.getSelection()
    
    if (mode === 'css') {
      //this.localConfig.textContent = await cssMinifier.csso(this.localConfig.textContent)
      selection = cssmin(selection)
    }
    else if (mode === 'javascript') {
      //console.log(this.localConfig.textContent)
      selection = jsmin(selection)
    }
    else {
      // 刪掉多餘空白與換行
      selection = selection.split('\n').join('')
      selection = selection.split('\t').join(' ')
      while (selection.indexOf('  ') > -1) {
        selection = selection.split('  ').join(' ')
      }
    }
    //selection = selection + 'AAA'
    cm.replaceSelection(selection)
  }
}