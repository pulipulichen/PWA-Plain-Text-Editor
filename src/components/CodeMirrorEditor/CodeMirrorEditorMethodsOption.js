export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.getMode = function (useFilter = true) {
    let cm = this.codemirror
    let mode = cm.getOption('mode').name
    
    if (useFilter) {
      if (mode === 'javascript'
              || mode === 'text/javascript'
              || mode === 'application/json'
              || mode === 'application/ld+json'
              || mode === 'text/typescript'
              || mode === 'application/typescript') {
        mode = 'javascript'
      }
      else if (mode === 'text/css'
              || mode === 'text/x-scss'
              || mode === 'text/x-less') {
        mode = 'css'
      }
      else if (mode === 'text/html' 
              || mode === 'application/xml') {
        mode = 'html'
      }
    }
    return mode
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
  
  CodeMirrorEditor.methods.setOption = function (key, value) {

    setTimeout(() => {
      this.codemirror.setOption(key, value)
    }, 100)

  }
}