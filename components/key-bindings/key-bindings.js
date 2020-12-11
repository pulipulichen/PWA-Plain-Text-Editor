/* global hotkeys */

module.exports = {
  beforeCreate: async function () {
    let vendorsPath = './components/key-bindings/vendors'

    await $.require(vendorsPath, [
      "/hotkeys/hotkeys.min.js",
    ])
  },
  mounted() {
    this.init()
  },
  computed: {
    parentRefs () {
      return this.$parent.$refs
    },
    CodeMirror () {
      return this.parentRefs.CodeMirror
    },
    editor () {
      return this.parentRefs.CodeMirror.editor
    }
  },
  methods: {
    init() {
      if (typeof (hotkeys) === 'undefined') {
        setTimeout(() => {
          this.init()
        }, 100)
        return false
      }

      hotkeys.filter = function (event) {
        var tagName = (event.target || event.srcElement).tagName;
        hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
        return true;
      }

      hotkeys('ctrl+f,ctrl+shift+f,ctrl+h,alt+shift+f,ctrl+z', (event, handler) => {

        switch (handler.key) {
          /*
           case 'ctrl+f':
           case 'ctrl+h':
           this.config.displayReplacePanel = true
           if (this.config.displayReplacePanel) {
           let selected = this.getSelectedText()
           if (selected) {
           this.config.stringToSearch = selected
           }
           this.$refs.ReplacePanel.focus()
           }
           event.preventDefault()
           event.stopPropagation()
           break;
           case 'alt+shift+f':
           this.formatCode()
           event.preventDefault()
           event.stopPropagation()
           break;
           case 'ctrl+z':
           if (!this.isUndoDisabled) {
           event.preventDefault()
           event.stopPropagation()
           this.undo()
           }
           break;
           */
          case 'ctrl+f':
            event.preventDefault()
            event.stopPropagation()
            
            //console.log(this.editor.doc.getCursor())
            
            this.CodeMirror.findNext("\n")
            
            //console.log('ok')
            //let editor = 
            
            //console.log(this.parentRefs.CodeMirror.editor)
            //console.log(this.parentRefs.CodeMirror.editor.execCommand('findNext'))
            
            
            break
          case 'ctrl+shift+f':
            event.preventDefault()
            event.stopPropagation()
            
            //console.log(this.editor.doc.getCursor())
            
            this.CodeMirror.findNext()
            
            //console.log('ok')
            //let editor = 
            
            //console.log(this.parentRefs.CodeMirror.editor)
            //console.log(this.parentRefs.CodeMirror.editor.execCommand('findNext'))
            
            
            break
        }
      });
    }
  }
}