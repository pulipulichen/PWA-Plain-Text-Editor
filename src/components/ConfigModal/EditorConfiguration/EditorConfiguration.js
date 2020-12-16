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
  },
  mounted() {
  },
  methods: {
  } // methods
}

export default EditorConfiguration