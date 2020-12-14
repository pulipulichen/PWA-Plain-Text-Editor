/* global appData, appComputed, appWatch, appMethods, appMount, appComponents, appBeforeCreate */

let app = {
  el: '#app',
  data: appData,
  beforeCreate: appBeforeCreate,
  components: appComponents,
  computed: appComputed,
  mounted: appMount,
  watch: appWatch,
  methods: appMethods
}

app = new Vue(app)
