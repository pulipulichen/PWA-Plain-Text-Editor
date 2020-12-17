import CodeMirrorOptions from './vendors/codemirror.config.webpack.js'

export default function (CodeMirrorEditor) {
  CodeMirrorEditor.computed.computedCodeMirrorOptions = function () {

    let options = {
      ...CodeMirrorOptions
    }

    options.mode.name = this.localConfig.syntax

    options.extraKeys['Ctrl-Alt-F'] = (cm) => {
      this.autoFormat(cm)
    }

    options.extraKeys['Tab'] = (cm) => {
      this.inputTab(cm)
    }

    options.extraKeys['Ctrl-O'] = (cm) => {
      this.openFile()
    }

    options.extraKeys['Ctrl-S'] = (cm) => {
      this.saveFile(cm)
    }

    options.lineWrapping = this.localConfig.lineWrapping

    //console.log(options)

    return options
  }
}