import dayjs from 'dayjs'
import cmModeUtil from './vendors/codemirror.mode-util.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.openFile = function () {
    console.log('open file')
  }
    
  CodeMirrorEditor.methods.saveFile = function () {
    let filename = this.getFilename()
    
    this.utils.FileUtils.download(filename, this.code)
  }
  
  CodeMirrorEditor.methods.getFilename = function () {
    if (this.localConfig.filename) {
      return this.localConfig.filename
    }
    
    let mode = this.getMode(false)
    let ext = cmModeUtil.getExtFromMode(mode)
    
    return dayjs().format('MMDD-hhmmss') + '.' + ext
  }
  
}