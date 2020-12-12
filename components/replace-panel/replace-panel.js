module.exports = {
  computed: {
    isSearchEnabled () {
      
    }
  },
  methods: {
    focus() {
      setTimeout(() => {
        this.$refs.SearchInput.focus()
      }, 0)
    },
    findPrev () {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findPrev()
    },
    findNext () {
      let CodeMirror = this.$parent.$refs.CodeMirror
      return CodeMirror.findNext()
    }
  }
}