import authorImageURL from './author.png'

let Author = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.localConfig.locale
    return {
      authorImageURL
    }
  },
//  components: {
//  },
  computed: {
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  mounted() {
  },
  methods: {
  } // methods
}

export default Author