import dayjs from 'dayjs'
import cmModeUtil from './codemirror/codemirror.mode-util.webpack.js'

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
    
    filename = window.prompt(this.$t('File name:'), filename)
    if (filename) {
      this.utils.FileUtils.download(filename, this.code)
    }
  }
  
  CodeMirrorEditor.methods.getFilename = function () {
    if (this.localConfig.filename) {
      return this.localConfig.filename
    }
    
    let mode = this.getMode(false)
    let ext = cmModeUtil.getExtFromMode(mode)
    
    return dayjs().format('MMDD-hhmmss') + '.' + ext
  }
  
  CodeMirrorEditor.methods.onPaste = function (event) {
    if (event.type !== 'paste') {
      return false
    }
    
    var data = event.clipboardData.items[0].getAsFile();

    var fr = new FileReader;

    fr.onloadend = async () => {
      //alert(fr.result.substring(0, 100)); // fr.result is all data
      //console.log(fr.result)
      this.insert(await this.$refs.OCRHandler.processOCR(fr.result))
    };

    fr.readAsDataURL(data);
  }
  
  CodeMirrorEditor.methods.insert = function (text) {
    let codeMirrorInstance = this.codemirror
    const doc = codeMirrorInstance.getDoc();
    const cursor = codeMirrorInstance.getCursor();
    doc.replaceRange(text, cursor);
    codeMirrorInstance.focus();
    setTimeout(() => {
      cursor.ch += text.length;
      codeMirrorInstance.setCursor(cursor);
    }, 0);
  }
}