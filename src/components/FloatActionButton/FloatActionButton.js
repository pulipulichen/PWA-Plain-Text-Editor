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
      viewportHeightMainButtonThreshold: 150,
      lastTextContent: '',
      lastFilename: null,
      isSpeaking: false,
      speechSynthesis: window.speechSynthesis
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.textContent'(textContent) {
      if (this.lastTextContent !== '') {
        if (textContent !== '') {
          this.lastTextContent = ''
          this.lastFilename = null
        }
      }
    },
    showMenu() {
      if (this.showMenu === true) {
        this.clearDelayCloseMenu()
      } else {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = null
      }
    },
    isSpeaking () {
      if (this.isSpeaking === false) {
        this.speechSynthesis.cancel()
      }
    },
    'config.textToSpeech': async function () {
      await this.speak(this.config.textToSpeech)
      this.config.textToSpeech = false
    },
  },
  computed: {}, // 移動到 FloatActionButtonComputed.js
  methods: {} // 移動到 FloatActionButtonMethods.js
}

import FloatActionButtonComputed from './FloatActionButtonComputed.js'
FloatActionButtonComputed(FloatActionButton)

import FloatActionButtonMethods from './FloatActionButtonMethods.js'
FloatActionButtonMethods(FloatActionButton)

import FloatActionButtonMethodsSpeak from './FloatActionButtonMethodsSpeak.js'
FloatActionButtonMethodsSpeak(FloatActionButton)

export default FloatActionButton