import cmModeUtil from './vendors/codemirror.mode-util.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMode = function (useFilter = true) {
    let cm = this.codemirror
    let mode = cm.getOption('mode').name
    
    return cmModeUtil.getMode(mode, useFilter)
  }

  CodeMirrorEditor.methods.setMode = function (mode) {
    if (this.simpleMode === true) {
      return false
    }

    setTimeout(() => {
      this.codemirror.setOption("mode", mode)
    }, 100)

    //this.codemirror$el = $('.CodeMirror:first')

    //console.log(this.codemirror$el)
  }
  
  CodeMirrorEditor.methods.setModeByFilename = function (filename) {
    this.localConfig.syntax = cmModeUtil.getModeFromFilename(filename) 
  }
  
  CodeMirrorEditor.methods.setOption = function (key, value) {

    setTimeout(() => {
      this.codemirror.setOption(key, value)
    }, 100)

  }
}