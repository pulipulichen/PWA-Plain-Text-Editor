/* global Node */
//import $ from 'jquery'
import ConfigModal from './ConfigModal/ConfigModal.vue'
import FloatActionButton from './FloatActionButton/FloatActionButton.vue'

//import FormatPanel from './FormatPanel/FormatPanel.vue'
//import ReplacePanel from './ReplacePanel/ReplacePanel.vue'

let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.locale
    return {
    }
  },
  components: {
    ConfigModal,
    FloatActionButton,
    //FormatPanel,
    ReplacePanel: () => import(/* webpackChunkName: "vendors/ReplacePanel" */ './ReplacePanel/ReplacePanel.vue'),
    CodeMirrorEditor: () => import(/* webpackChunkName: "vendors/CodeMirror" */ './CodeMirrorEditor/CodeMirrorEditor.vue')
  },
  computed: {
  },
  watch: {
    'config.inited' () {
      if (this.config.inited === false) {
        return false
      }
      
      this.initKeyBinds()
    },
    'localConfig.displayPanel' () {
      if (!this.localConfig.displayPanel) {
        this.config.panelHeight = '0rem'
      }
    },
//    'localConfig.textContent' () {
//      console.log('有變動')
//    }
  },
//  async mounted () {
//    
//  },
  methods: {
  }
}

import IndexComputedTextContent from './IndexComputedTextContent.js'
IndexComputedTextContent(Index)

import IndexMethodsKeyBindings from './IndexMethodsKeyBindings.js'
IndexMethodsKeyBindings(Index)

export default Index