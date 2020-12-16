import $ from 'jquery'

let EditorConfiguration = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.config.locale
    return {
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