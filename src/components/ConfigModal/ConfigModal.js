import $ from 'jquery'

import TableOfContents from './TableOfContents/TableOfContents.vue'

import Author from './Author/Author.vue'
import EditorConfiguration from './EditorConfiguration/EditorConfiguration.vue'

let ConfigModal = {
  props: ['config', 'localConfig', 'utils'],
  components: {
    'author': Author,
    'table-of-contents': TableOfContents,
    EditorConfiguration
  },
  data () {    
    this.$i18n.locale = this.config.locale
    return {
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
  methods: {
    open: async function () {
      $(this.$refs.Modal).modal('show')
      
    }
  }
}

export default ConfigModal