/* global PULI_UTILS */

export default {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.displayPanel'() {
      this.setPanelHeight()
    },
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
      this.setPanelHeight()
    }
  },
  computed: {
    // ---------------------------
    calcResult () {
      let textContent = this.localConfig.textContent.trim()
      
      if (textContent.indexOf('\n') === -1) {
        // 表示只有一行
        try {
          let result
          eval(`result = (${textContent})`)
          return result
        }
        catch (e) {}
      }
      else {
        // 試著把最後一行加上return
        let lastBreak = textContent.lastIndexOf('\n')
        textContent = textContent.slice(0, lastBreak + 1) + 'return ' + textContent.slice(lastBreak + 1)
        
        try {
          let result
          eval(`result = (function () {
${textContent}
})()`)
          return result
        }
        catch (e) {}
      }
    },
    computedCalcButtonClassName() {
      return {
        'disabled': !this.calcResult,
      }
    },
    computedCalcButtonText() {
      let result = this.calcResult
      
      if (!result) {
        return '(Calc)'
      }
      
      let lengthLimit = 13
      
      result = String(result).trim()
      result = result.split('\n').join(' ')
      if (result.length > lengthLimit) {
        result = result.slice(0, lengthLimit)
      }
      return result
    }
  },
  mounted() {
    this.setPanelHeight()
  },
  methods: {
    setPanelHeight() {
      //console.log(this.$parent.localConfig.displayPanel)
      if (this.localConfig.displayPanel === 'format') {
        this.config.panelHeight = '8rem'
      }
    },
    copyCalcResult () {
      PULI_UTILS.copyPlainString(this.calcResult)
    }
  }
}