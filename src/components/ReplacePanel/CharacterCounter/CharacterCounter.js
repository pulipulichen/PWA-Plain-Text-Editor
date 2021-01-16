let CharacterCounter = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    count () {
      let textContent
      if (this.config.selectedText && this.config.selectedText !== '') {
        textContent = this.config.selectedText
      }
      else {
        textContent = this.localConfig.textContent.trim()
      }
      
      let len = textContent.length
      
      let output
      if (len > 1) {
        output = len + ' ' + this.$t('Characters')
      }
      else if (len === 1) {
        output = len + ' ' + this.$t('Character')
      }
      
      return output
    }
  },
//  mounted() {
//    
//  },
//  methods: {
//    
//  }
}

export default CharacterCounter