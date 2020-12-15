import dayjs from 'dayjs'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.saveFile = function () {
    let filename = this.getFilename()
    
    this.utils.FileUtils.download(filename, this.code)
  }
  
  CodeMirrorEditor.methods.getFilename = function () {
    let mode = this.getMode(false)
    
    let ext = 'txt'
    if (mode.indexOf('/') > -1) {
      ext = mode.slice(mode.lastIndexOf('/') + 1)
    }
    else {
      ext = mode
    }
    
    if (ext === 'javascript') {
      ext = 'js'
    }
    
    return dayjs().format('MMDD-hhmmss') + '.' + ext
  }
  
}