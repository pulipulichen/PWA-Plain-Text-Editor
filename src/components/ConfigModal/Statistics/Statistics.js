let Statistics = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.localConfig.locale
    return {
      
    }
  },
//  components: {
//  },
  computed: {
    isEnabled () {
      return this.$parent.isOpened
    },
    lineCount () {
      if (this.isEnabled === false) {
        return false
      }
      
      return this.localConfig.textContent.split('\n').length
    },
    charCount () {
      if (this.isEnabled === false) {
        return false
      }
      
      let text = this.localConfig.textContent
      text = text.split('\n').join('')
      return text.length
    },
    charNoSpacesCount () {
      if (this.isEnabled === false) {
        return false
      }
      
      let text = this.localConfig.textContent
      text = text.split('\n').join('')
      text = text.split(' ').join('')
      text = text.split('\t').join('')
      return text.length
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  mounted() {
  },
  methods: {
  } // methods
}

export default Statistics