/* global PULI_UTILS */

module.exports = {
  watch: {
    '$parent.config.displayReplacePanel' () {
      this.setPanelHeight()
    },
    '$parent.config.replaceMode' () {
      this.setPanelHeight()
    },
    '$parent.inited' () {
      if (this.$parent.inited === false) {
        return false
      }
      this.setPanelHeight()
    }
  },
  computed: {
    isSearchEnabled () {
      
    }
  },
  mounted () {
    this.setPanelHeight()
  },
  methods: {
    setPanelHeight () {
      //console.log('setPanelHeight', this.$parent.config.displayReplacePanel, this.$parent.config.replaceMode)
      if (this.$parent.config.displayReplacePanel === true) {
        if (this.$parent.config.replaceMode === 'line') {
          this.$parent.panelHeight = '12rem'
        }
        else {
          this.$parent.panelHeight = '8rem'
        }
      }
      //console.log(this.$parent.panelHeight)
    },
    focus: async function () {
      await PULI_UTILS.sleep(0)
      this.$refs.SearchInput.focus()
    },
    findPrev () {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findPrev()
    },
    findNext () {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findNext()
    },
    selectReplaceInput: async function() {
      await PULI_UTILS.sleep(0)
      //console.log('selectReplaceInput', this.$refs.ReplaceInput)
      this.$refs.ReplaceInput.focus()
      this.$refs.ReplaceInput.select()
    }
  }
}