import $ from 'jquery'
import cmModeUtil from './../../CodeMirrorEditor/codemirror/codemirror.mode-util.webpack.js'

let EditorConfiguration = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modeOptions: cmModeUtil.getModeSelectOptions(),
      mainButtonActionOptions: [
        {
          value: 'copy & clear',
          text: 'Copy & Clear'
        },
        {
          value: 'copy',
          text: 'Copy'
        },
        {
          value: 'select all',
          text: 'Select All'
        },
      ],
      ocrLanguageList: [
        {
          value: 'eng',
          text: 'English'
        },
        {
          value: 'chi_tra',
          text: 'Chinese - Traditional'
        },
        {
          value: 'chi_sim',
          text: 'Chinese - Simplified'
        },
        {
          value: 'jpn',
          text: 'Japanese'
        },
      ]
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
    },
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
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