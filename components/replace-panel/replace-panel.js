module.exports = {
    methods: {
      focus () {
        setTimeout(() => {
          this.$refs.SearchInput.focus()
        }, 0)
      }
    }
  }