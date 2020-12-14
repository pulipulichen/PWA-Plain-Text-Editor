/* global PULI_UTILS */

module.exports = {
  data: function () {
    return {
    }
  },
  watch: {
    '$parent.config.displayPanel'() {
      this.setPanelHeight()
    },
    '$parent.inited'() {
      if (this.$parent.inited === false) {
        return false
      }
      this.setPanelHeight()
    }
  },
  computed: {
    config () {
      return this.$parent.config
    },
    
    
    // ---------------------------
    calcResult () {
      let textContent = this.config.textContent.trim()
      
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
      //console.log(this.$parent.config.displayPanel)
      if (this.$parent.config.displayPanel === 'format') {
        this.$parent.panelHeight = '8rem'
      }
    },
    copyCalcResult () {
      PULI_UTILS.copyPlainString(this.calcResult)
    }
  }
}