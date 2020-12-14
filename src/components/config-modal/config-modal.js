module.exports = {
  mounted () {
    this.open()
  },
  methods: {
    open () {
      $(this.$refs.Modal).modal('show')
    }
  }
}