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

      hotkeys('ctrl+f,ctrl+shift+f,ctrl+h,alt+shift+f,ctrl+z,ctrl+shift+q', (event, handler) => {

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
            //console.log('a')
            this.findNext(event)
            break
          case 'ctrl+shift+f':
            this.findPrev(event)
            break
          case 'ctrl+h':
            this.setReplace(event)
            break
          case 'ctrl+shift+q':
            event.preventDefault()
            event.stopPropagation()
            //$.get('README.md', (text) => {
            $.get('[demo-content/calc-number.md', (text) => {
              console.log(text)
              this.$parent.config.textContent = text
              //console.log('測試用')
            })
            break
        }
      });
    },
    findNext (event) {
      event.preventDefault()
      event.stopPropagation()
      //console.log('findNext')
      let selected = this.CodeMirror.getSelectedText()
      //console.log(this.$parent.config.displayReplacePanel)
      if (this.$parent.config.displayPanel !== 'replace'
              || (selected !== '' && selected !== this.$parent.config.stringToSearch)) {
        this.$parent.config.displayPanel = 'replace'
        
        if (selected !== '') {
          this.$parent.config.stringToSearch = selected
        }
      }
      else {
        this.CodeMirror.findNext()
      }
    },
    findPrev (event) {
      event.preventDefault()
      event.stopPropagation()
      //console.log('findPrve')
      let selected = this.CodeMirror.getSelectedText()
      if (this.$parent.config.displayPanel !== 'replace'
              || (selected !== '' && selected !== this.$parent.config.stringToSearch)) {
        this.$parent.config.displayPanel = 'replace'
        
        if (selected !== '') {
          this.$parent.config.stringToSearch = selected
        }
      }
      else {
        this.CodeMirror.findPrev()
      }
    },
    setReplace (event) {
      event.preventDefault()
      event.stopPropagation()
      //console.log('findNext')
      let selected = this.CodeMirror.getSelectedText()
      //console.log(this.$parent.config.displayReplacePanel)
      if (this.$parent.config.displayPanel !== 'replace'
              || (selected !== '' && selected !== this.$parent.config.stringToSearch)) {
        this.$parent.config.displayPanel = 'replace'
        
        if (selected !== '') {
          this.$parent.config.stringToSearch = selected
        }
      }
      this.$parent.$refs.ReplacePanel.selectReplaceInput()
    },
  }
}