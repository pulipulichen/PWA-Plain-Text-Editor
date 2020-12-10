module.exports = {
  mounted() {
    //$(this.$refs.Modal).modal('show')
    //console.log(this.$parent.config.enableTextWrap)
  },
  methods: {
    open() {
      //console.log('aaa')
      $(this.$refs.Modal).modal('show')
    }
  }
}