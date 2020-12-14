/* global Node */
//import $ from 'jquery'
import ConfigModal from './ConfigModal/ConfigModal.vue'
import FloatActionButton from './FloatActionButton/FloatActionButton.vue'

let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.locale
    return {
      panelHeight: '0rem',
      textContentHistory: [],
      textContentHistoryIndex: -1,
      textContentModified: true,
      searchPostion: -1,
      debug: {
        enableRestore: true
      }
    }
  },
  components: {
    ConfigModal,
    FloatActionButton
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
    'localConfig' () {
      if (!this.localConfig.displayPanel) {
        this.panelHeight = '0rem'
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