import $ from 'jquery'

let FloatActionButton = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
      showMenu: false,
      showMenuTimer: null,
      positionBottom: true,
      viewportHeightPositionThreshold: 300,
      viewportHeightMainButtonThreshold: 150
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    showMenu() {
      if (this.showMenu === true) {
        this.clearDelayCloseMenu()
      } else {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = null
      }
    }
  },
  computed: {}, // 移動到 FloatActionButtonComputed.js
  methods: {} // 移動到 FloatActionButtonMethods.js
}

import FloatActionButtonComputed from './FloatActionButtonComputed.js'
FloatActionButtonComputed(FloatActionButton)

import FloatActionButtonMethods from './FloatActionButtonMethods.js'
FloatActionButtonMethods(FloatActionButton)

export default FloatActionButton