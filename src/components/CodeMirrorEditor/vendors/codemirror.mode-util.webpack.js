export default {
  getMode: function (mode, useFilter) {
    if (useFilter) {
      if (mode === 'javascript'
              || mode === 'text/javascript'
              || mode === 'application/json'
              || mode === 'application/ld+json'
              || mode === 'text/typescript'
              || mode === 'application/typescript') {
        mode = 'javascript'
      } else if (mode === 'text/css'
              || mode === 'text/x-scss'
              || mode === 'text/x-less') {
        mode = 'css'
      } else if (mode === 'text/html'
              || mode === 'application/xml') {
        mode = 'html'
      }
    }
    return mode
  },
  getModeFromFilename: function (filename) {
    let ext = filename.slice(filename.lastIndexOf('.') + 1).toLowerCase()

    if (ext === 'txt') {
      return 'text/plain'
    } else if (ext === 'js') {
      return 'text/javascript'
    } else if (ext === 'css' || ext === 'less') {
      return 'text/css'
    } else if (ext === 'html' || ext === 'htm' || ext === 'xml' || ext === 'svg') {
      return 'text/html'
    } else if (ext === 'c') {
      return 'text/x-c++src'
    } else if (ext === 'java') {
      return 'text/x-java'
    } else if (ext === 'perl') {
      return 'text/x-perl'
    } else if (ext === 'php') {
      return 'application/x-httpd-php'
    } else if (ext === 'py') {
      return 'text/x-python'
    } else if (ext === 'md') {
      return 'text/x-markdown'
    } else if (ext === 'r') {
      return 'text/x-rsrc'
    } else if (ext === 'sh') {
      return 'text/x-sh'
    } else if (ext === 'yaml') {
      return 'text/x-yaml'
    }
    return 'text/plain'
  },
  getModeSelectOptions: function () {
    return [
      {value: "text/plain", text: "Txt"},
      {value: "text/javascript", text: "JavaScript"},
      {value: "text/css", text: "CSS / LESS"},
      {value: "text/html", text: "HTML / XML / SVG"},
      {value: "text/x-markdown", text: "Markdown"},
      {value: "text/x-c++src", text: "C / C++"},
      {value: "text/x-csharp", text: "C#"},
      {value: "text/x-java", text: "Java"},
      {value: "text/x-perl", text: "Perl"},
      {value: "application/x-httpd-php", text: "PHP"},
      {value: "text/x-python", text: "Python"},
      {value: "text/x-rsrc", text: "R"},
      {value: "text/x-sh", text: "Linux Shell"},
      {value: "text/x-yaml", text: "YAML"},
    ]
  },
  getExtFromMode: function (mode) {
    
    let ext = 'txt'
    if (mode.indexOf('/') > -1) {
      ext = mode.slice(mode.lastIndexOf('/') + 1)
      
      if (ext.indexOf('-') > -1) {
        ext = ext.slice(ext.lastIndexOf('-') + 1)
      }
    }
    else {
      ext = mode
    }
    
    if (ext === 'javascript') {
      ext = 'js'
    }
    else if (ext === 'rsrc') {
      ext = 'R'
    }
    else if (ext === 'markdown') {
      ext = 'md'
    }
    
    return ext
  }
}