import dayjs from 'dayjs'
import cmModeUtil from './vendors/codemirror.mode-util.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.openFile = async function () {
    //console.log('open file')
    let file = await this.$refs.OpenFile.openFile()
    //console.log(file)
    
    if (file) {
      this.localConfig.filename = file.filename
      this.code = file.content
      return true
    }
    return false
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