/* global Node */
//import $ from 'jquery'
import ConfigModal from './ConfigModal/ConfigModal.vue'
import FloatActionButton from './FloatActionButton/FloatActionButton.vue'

import FormatPanel from './FormatPanel/FormatPanel.vue'
import ReplacePanel from './ReplacePanel/ReplacePanel.vue'

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
    FormatPanel,
    ReplacePanel
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
    }
  },
//  async mounted () {
//    
//  },
  methods: {
  }
}

import IndexKeyBindings from './IndexKeyBindings.js'
IndexKeyBindings(Index)

export default Index