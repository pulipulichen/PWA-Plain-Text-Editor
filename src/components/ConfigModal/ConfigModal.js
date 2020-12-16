import $ from 'jquery'

import TableOfContents from './TableOfContents/TableOfContents.vue'

import Author from './Author/Author.vue'
import EditorConfiguration from './EditorConfiguration/EditorConfiguration.vue'
import Statistics from './Statistics/Statistics.vue'

let ConfigModal = {
  props: ['config', 'localConfig', 'utils'],
  components: {
    'author': Author,
    'table-of-contents': TableOfContents,
    EditorConfiguration,
    Statistics
  },
  data () {    
    this.$i18n.locale = this.config.locale
    return {
      modal: null,
      isOpened: false
    }
  },
  watch: {
    'config.inited' () {
      //return false
      
      if (this.config.inited === false) {
        return false
      }
      this.open()
    }
  },
//  mounted () {
//    this.init()
//  },
  methods: {
    init: function () {
      this.modal = $(this.$refs.Modal)
      
      this.modal.modal({
        onShow: () => {
          //console.log('open')
          this.isOpened = true
        },
        onHidden: () => {
          this.isOpened = false
        }
      })
    },
    open: async function () {
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show')
    }
  }
}

export default ConfigModal