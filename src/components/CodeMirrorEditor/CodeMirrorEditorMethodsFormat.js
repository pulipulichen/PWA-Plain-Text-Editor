import beautify from 'js-beautify'

import {jsmin} from "jsmin"
import cssmin from "cssmin"
import minifyXML from "minify-xml"

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
    
    let options = {}
    if (this.localConfig.indent.mode === 'space') {
      options.indent_size = this.localConfig.indent.size
    }
    
    selection = process(selection, options)
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
    else if (mode === 'html') {
      //console.log(this.localConfig.textContent)
      selection = minifyXML(selection)
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
  
  CodeMirrorEditor.methods.inputTab = function () {
    let cm = this.codemirror
    cm.replaceSelection(this.computedIndentSpaces, "end");
  }
  
  CodeMirrorEditor.methods.setFontSize = function () {
    let fontSize = this.localConfig.fontSize
    this.editor$el.css('font-size', fontSize + 'pt')
    this.editor$el.css('line-height', Math.round(fontSize * 1.5) + 'pt')
  }
}