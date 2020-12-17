export default function (CodeMirrorEditor) {
  CodeMirrorEditor.methods.onCodeMirrorKeyHandled = function (cm, input) {
    if (input.origin === 'paste') {
      return false
    }
    
    //console.log(cm)
    //console.log(pos)
    //console.log(e, s)
    //this.$refs.cmEditor.codemirror.execCommand('autocomplete')
    this.$refs.cmEditor.codemirror.showHint()

  }

}