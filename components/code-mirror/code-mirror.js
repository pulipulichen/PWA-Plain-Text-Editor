/* global CodeMirror */

module.exports = {
  beforeCreate: async function () {
    await $.require([
      "./components/code-mirror/vendors/code-mirror/lib/codemirror.css",
      './components/code-mirror/vendors/code-mirror/lib/codemirror.js',
      './components/code-mirror/vendors/code-mirror/mode/javascript/javascript.js'
    ])
  },
  mounted: async function () {
    this.initCodeMirror()
  },
  methods: {
    initCodeMirror () {
      $(() => {
        if (typeof(CodeMirror) === 'undefined') {
          setTimeout(() => {
            this.initCodeMirror()
          }, 100)
          return false
        }
        
        var editor = CodeMirror.fromTextArea(this.$refs.MainTextarea, {
          lineNumbers: true,
          lineWrapping: true,
          
          mode:  "javascript",
          //extraKeys: {"Alt-F": "findPersistent"}
        });
        
        setTimeout(() => {
          //editor.
        }, 1000)
      })
    }
  }
}