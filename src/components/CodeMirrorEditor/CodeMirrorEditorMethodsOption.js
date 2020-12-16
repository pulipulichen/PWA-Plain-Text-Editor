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
  
  CodeMirrorEditor.methods.setModeByFilename = function (filename) {
    let ext = filename.slice(filename.lastIndexOf('.') + 1).toLowerCase()
    
    if (ext === 'txt') {
      this.localConfig.syntax = 'text/plain'
    }
    else if (ext === 'js') {
      this.localConfig.syntax = 'text/javascript'
    }
    else if (ext === 'css' || ext === 'less') {
      this.localConfig.syntax = 'text/css'
    }
    else if (ext === 'html' || ext === 'htm') {
      this.localConfig.syntax = 'text/html'
    }
    else if (ext === 'c') {
      this.localConfig.syntax = 'text/x-c++src'
    }
    else if (ext === 'java') {
      this.localConfig.syntax = 'text/x-java'
    }
    else if (ext === 'perl') {
      this.localConfig.syntax = 'text/x-perl'
    }
    else if (ext === 'php') {
      this.localConfig.syntax = 'application/x-httpd-php'
    }
    else if (ext === 'py') {
      this.localConfig.syntax = 'text/x-python'
    }
    else if (ext === 'r') {
      this.localConfig.syntax = 'text/x-rsrc'
    }
    else if (ext === 'sh') {
      this.localConfig.syntax = 'text/x-sh'
    }
    else if (ext === 'yaml') {
      this.localConfig.syntax = 'text/x-yaml'
    }
  }
  
  CodeMirrorEditor.methods.setOption = function (key, value) {

    setTimeout(() => {
      this.codemirror.setOption(key, value)
    }, 100)

  }
}