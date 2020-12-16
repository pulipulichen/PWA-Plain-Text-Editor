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
    openFile () {
      console.log('openFile', this.CodeMirror)
      this.CodeMirror.openFile()
    },
    saveFile () {
      this.CodeMirror.saveFile()
    }
  }
}

export default FileManager