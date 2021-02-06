let SpeakConfiguration = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.localConfig.locale
    return {
      
    }
  },
//  components: {
//  },
  computed: {
  },
  watch: {
//    'localConfig.speechSynthesisRate' () {
//      console.log(this.localConfig.speechSynthesisRate)
//    }
  },
  mounted() {
    //this.initCheckbox()
  },
  methods: {
  } // methods
}

export default SpeakConfiguration