import $ from 'jquery'

export default {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.locale
    return {
    }
  },
  watch: {
    'config.inited' () {
      return false
      
      if (this.config.inited === false) {
        return false
      }
      this.open()
    }
  },
  methods: {
    open: async function () {
      $(this.$refs.Modal).modal('show')
      
    }
  }
}