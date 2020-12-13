/* global PULI_UTILS */

module.exports = {
  data: function () {
    return {
    }
  },
  watch: {
    '$parent.config.displayPanel'() {
      this.setPanelHeight()
    },
    '$parent.inited'() {
      if (this.$parent.inited === false) {
        return false
      }
      this.setPanelHeight()
    }
  },
  computed: {
    config () {
      return this.$parent.config
    }
  },
  mounted() {
    this.setPanelHeight()
  },
  methods: {
    setPanelHeight() {
      //console.log(this.$parent.config.displayPanel)
      if (this.$parent.config.displayPanel === 'format') {
        this.$parent.panelHeight = '8rem'
      }
    },

  }
}