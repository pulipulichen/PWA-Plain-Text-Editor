import $ from 'jquery'

export default {
    props: ['config', 'localConfig', 'utils'],
    data() {
      this.$i18n.locale = this.config.locale
      return {
        showMenu: false,
        showMenuTimer: null,
        positionBottom: true
      }
    },
    watch: {
      showMenu () {
        if (this.showMenu === true) {
          this.clearDelayCloseMenu()
        }
        else {
          clearTimeout(this.showMenuTimer)
          this.showMenuTimer = null
        }
      }
    },
    computed: {
      computedStyle () {
        //console.log()
        if (this.positionBottom === false) {
          return false
        }
        
        let style = {
          'bottom': `calc(1rem + ${this.config.panelHeight})`
        }
        //console.log(style)
        return style
      },
      computedClassNameList () {
        return {
          top: !this.positionBottom,
          //'display-replace-panel': (this.$parent.config.displayPanel === 'replace')
        }
      }
    },
    methods: {
      openConfigModal () {
        //console.log(this.$parent.$refs.ConfigModal)
        //console.log(this.$parent.$refs)
        this.$parent.$refs.ConfigModal.open()
      },
      delayCloseMenu () {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = setTimeout(() => {
          this.showMenu = false
        }, 3 * 1000)
      },
      clearDelayCloseMenu () {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = null
      },
      copy() {
        let text = this.localConfig.textContent
        this.utils.ClipboardUtils.copyPlainString(text)
        
        this.showMenu = false
      },
      closeMenu() {
        this.showMenu = false
      },
      toggleReplacePanel() {
        //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
        //console.log(this.$parent.config.displayReplacePanel)
        if (this.localConfig.displayPanel !== 'replace') {
          this.localConfig.displayPanel = 'replace'
        }
        else {
          this.localConfig.displayPanel = null
        }
        
        this.closeMenu()
      },
      toggleFormatPanel() {
        //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
        //console.log(this.$parent.config.displayReplacePanel)
        if (this.localConfig.displayPanel !== 'format') {
          this.localConfig.displayPanel = 'format'
        }
        else {
          this.localConfig.displayPanel = null
        }
        console.log(this.lcoalConfig.displayPanel)
        
        this.closeMenu()
      },
      clear() {
        if (window.confirm('Are you sure?')) {
          this.localConfig.textContent = ''
          this.localConfig.filename = null
          //this.clearHistory()
        }
        this.closeMenu()
      },
      /*
      formatCode () {
        this.$parent.formatCode()
        this.closeMenu()
      }
      */
    }
  }