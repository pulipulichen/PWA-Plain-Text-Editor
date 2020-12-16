import $ from 'jquery'

let DragDropOpener = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      dragging: false
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    initDragEvent () {
      
    }
  }
}

export default DragDropOpener