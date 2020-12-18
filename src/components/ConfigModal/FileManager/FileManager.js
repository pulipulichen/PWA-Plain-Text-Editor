let FileManager = {
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
    CodeMirror () {
      return this.$parent.$parent.$refs.CodeMirrorEditor
    }
  },
//  mounted() {
//    
//  },
  methods: {
    openFile: async function () {
      //console.log('openFile', this.CodeMirror)
      if (await this.CodeMirror.openFile() === true) {
        this.$parent.close()
      }
      
    },
    saveFile () {
      this.CodeMirror.saveFile()
      this.$parent.close()
    }
  }
}

export default FileManager