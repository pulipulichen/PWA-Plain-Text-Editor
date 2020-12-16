import authorImageURL from './author.png'

let Author = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.config.locale
    return {
      authorImageURL
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

export default Author