/* global Node */
//import $ from 'jquery'
//import FloatActionButton from './FloatActionButton/FloatActionButton.vue'

//import FormatPanel from './FormatPanel/FormatPanel.vue'
import LoadingLayer from './LoadingLayer/LoadingLayer.vue'

let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
    }
  },
  components: {
    FloatActionButton: () => import(/* webpackChunkName: "vendors/FloatActionButton" */ './FloatActionButton/FloatActionButton.vue'),
    ConfigModal: () => import(/* webpackChunkName: "vendors/ConfigModal" */ './ConfigModal/ConfigModal.vue'),
    //FormatPanel,
    //ReplacePanel: () => import(/* webpackChunkName: "vendors/ReplacePanel" */ './ReplacePanel/ReplacePanel.vue'),
    ReplacePanel: () => import(/* webpackChunkName: "vendors/CodeMirror" */ './ReplacePanel/ReplacePanel.vue'),
    CodeMirrorEditor: () => import(/* webpackChunkName: "vendors/CodeMirror" */ './CodeMirrorEditor/CodeMirrorEditor.vue'),
    LoadingLayer,
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