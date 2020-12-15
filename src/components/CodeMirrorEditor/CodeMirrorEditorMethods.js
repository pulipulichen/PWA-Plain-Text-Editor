export default function (CodeMirrorEditor) {
  CodeMirrorEditor.computed = {
//    editor () {
//      return this.$refs.cmEditor
//    },
    computedCodeMirrorOptions() {

      let options = {
        ...CodeMirrorOptions
      }

      options.extraKeys['Ctrl-Alt-F'] = (cm) => {
        this.autoFormat(cm)
      }

      //console.log(options)

      return options
    },
    editor$el() {
      //console.log(this.$refs.cmEditor.$el)
      if (!this.$refs.cmEditor) {
        return undefined
      }

      return $(this.$refs.cmEditor.$el).find('.CodeMirror:first')
    },
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
}