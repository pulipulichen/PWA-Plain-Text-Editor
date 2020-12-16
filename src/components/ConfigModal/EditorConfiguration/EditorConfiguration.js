import $ from 'jquery'
import cmModeUtil from './../../CodeMirrorEditor/vendors/codemirror.mode-util.webpack.js'

let EditorConfiguration = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.config.locale
    return {
      modeOptions: cmModeUtil.getModeSelectOptions()
    }
  },
//  components: {
//  },
  computed: {
  },
  watch: {
    'config.inited' () {
      if (this.config.inited === false) {
        return false
      }
      this.initCheckbox()
    }
  },
  mounted() {
    //this.initCheckbox()
  },
  methods: {
    initCheckbox () {
      $(this.$el).find('.ui.checkbox').checkbox()
    }
  } // methods
}

export default EditorConfiguration