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
    },
    isTrimEnabled() {
      for (let i = 0; i < this.textContentLines.length; i++) {
        let line = this.textContentLines[i]
        if (line !== line.trim()) {
          return true
        }
      }
      return false
    },
    isLTrimEnabled() {
      for (let i = 0; i < this.textContentLines.length; i++) {
        let line = this.textContentLines[i]
        let char = line.trim().slice(0, 1)
        let index = line.indexOf(char)
        if (index > 0) {
          return true
        }
      }
      return false
    },
    isRTrimEnabled() {
      for (let i = 0; i < this.textContentLines.length; i++) {
        let line = this.textContentLines[i]
        let char = line.trim().slice(-1)
        let index = line.lastIndexOf(char)
        if (index < line.length - 1) {
          return true
        }
      }
      return false
    },
    isFormatCodeEnabled() {
      return (this.isFormatJSONEnabled || this.isFormatXMLEnabled)
    },
    isFormatJSONEnabled() {
      if (this.textContentTrim.startsWith('{')
              && this.textContentTrim.endsWith('}')) {
        try {
          //console.log(this.textContentTrim)
          //JSON.parse(this.textContentTrim)
          eval('let test = ' + this.textContentTrim)
          return true
        } catch (e) {
          return false
        }
      }
      return false
    },
    isFormatXMLEnabled() {
      if (this.textContentTrim.startsWith('<')
              && this.textContentTrim.endsWith('>')) {
        let rightIndex = this.textContentTrim.indexOf('>')
        //console.log(rightIndex)
        if (rightIndex === this.textContentTrim.length - 1) {
          return false
        }

        let leftIndex = this.textContentTrim.lastIndexOf('<')
        //console.log(leftIndex)
        if (leftIndex === 0) {
          return false
        }

        return true
      }
      return false
    },
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