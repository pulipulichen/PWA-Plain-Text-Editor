

let SpeakConfiguration = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.localConfig.locale
    return {
      isAutoListening: false,
      timer: null,
      lastText: null,
      eventFunction: null
    }
  },
////  components: {
////  },
//  computed: {
//  },
//  watch: {
////    'localConfig.speechSynthesisRate' () {
////      console.log(this.localConfig.speechSynthesisRate)
////    }
//  },
//  mounted() {
//    //this.initCheckbox()
//  },
  methods: {
    listen: async function () {
      // First, ask the Permissions API if we have some kind of access to
        // the "clipboard-read" feature.
        //console.log('aaa')
        if (this.isAutoListening) {
          clearInterval(this.timer)
          this.isAutoListening = false
          this.lastText = null
          window.removeEventListener('focus', this.eventFunction)
          return false
        }
        
        this.isAutoListening = true
        
        this.eventFunction = () => {
        //this.timer = setInterval(() => {
          window.navigator.permissions.query({name: "clipboard-read"}).then(result => {
            //console.log('bbb')
            // If permission to read the clipboard is granted or if the user will
            // be prompted to allow it, we proceed.

            if (result.state === "granted" || result.state === "prompt") {
              navigator.clipboard.readText()
                .then(text => {
                  //console.log('Pasted content: ', text);
                  if (text !== this.lastText) {
                    this.lastText = text
                    this.config.textToSpeech = text
                  }
                })
                .catch(err => {
                  console.error('Failed to read clipboard contents: ', err);
                });
            }
            else {
              //console.error('cliboard permissions deny')
              window.alert(this.$t('cliboard permissions deny'))
              this.isAutoListening = false
              this.lastText = null
              window.removeEventListener('focus', this.eventFunction)
              return false 
            }
          });
        //}, 1000)  
        } // this.eventFunction = () => {
          
      window.addEventListener('focus', this.eventFunction)
      this.eventFunction()
    }, // listen: async function () {
    stopSpeak () {
      this.config.textToSpeech = false
    }
  } // methods
}

export default SpeakConfiguration