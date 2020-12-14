/* global Node */
//import $ from 'jquery'
import ConfigModal from './ConfigModal/ConfigModal.vue'

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
    ConfigModal
  },
  computed: {
    
  },
  watch: {
    'localConfig' () {
      if (!this.localConfig.displayPanel) {
        this.panelHeight = '0rem'
      }
    }
  },
//  async mounted () {
//    
//  },
//  methods: {
//    
//  }
}

export default Index