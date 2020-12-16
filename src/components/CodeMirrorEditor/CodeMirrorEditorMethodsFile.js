import dayjs from 'dayjs'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.saveFile = function () {
    let filename = this.getFilename()
    
    this.utils.FileUtils.download(filename, this.code)
  }
  
  CodeMirrorEditor.methods.getFilename = function () {
    if (this.localConfig.filename) {
      return this.localConfig.filename
    }
    
    let mode = this.getMode(false)
    
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
    
    return dayjs().format('MMDD-hhmmss') + '.' + ext
  }
  
}