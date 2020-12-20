import $ from 'jquery'

export default function (FloatActionButton) {
  FloatActionButton.methods.openConfigModal = function () {
    //console.log(this.$parent.$refs.ConfigModal)
    //console.log(this.$parent.$refs)
    this.$parent.$refs.ConfigModal.open()
  }
  FloatActionButton.methods.delayCloseMenu = function () {
    clearTimeout(this.showMenuTimer)
    this.showMenuTimer = setTimeout(() => {
      this.showMenu = false
    }, 3 * 1000)
  }
  FloatActionButton.methods.clearDelayCloseMenu = function () {
    clearTimeout(this.showMenuTimer)
    this.showMenuTimer = null
  }
  FloatActionButton.methods.onMainIconClick = function () {
    if (this.isURLSelected) {
      let url = this.config.selectedText
      window.open(url, '_blank')
      this.utils.ClipboardUtils.copyPlainString(url)
    }
    else if (this.isEmailSelected) {
      let email = this.config.selectedText
      let url = `mailto:${email}`
      window.open(url, '_blank')
      this.utils.ClipboardUtils.copyPlainString(email)
    }
    else if (this.isPuliWorkSelected) {
      let url = `https://www.facebook.com/pulipuli.chen`
      window.open(url, '_blank') 
      this.utils.ClipboardUtils.copyPlainString(this.config.selectedText)
    }
    else if (this.hasSelectedText) {
      this.searchWeb()
    }
    else {
      let text = this.localConfig.textContent
      this.utils.ClipboardUtils.copyPlainString(text)
    }

    this.showMenu = false
  }
  FloatActionButton.methods.closeMenu = function () {
    this.showMenu = false
  }
  FloatActionButton.methods.toggleReplacePanel = function () {
    //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
    //console.log(this.$parent.config.displayReplacePanel)
    if (this.localConfig.displayPanel !== 'replace') {
      this.localConfig.displayPanel = 'replace'
    } else {
      this.localConfig.displayPanel = null
    }

    this.closeMenu()
  }
  FloatActionButton.methods.toggleFormatPanel = function () {
    //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
    //console.log(this.$parent.config.displayReplacePanel)
    if (this.localConfig.displayPanel !== 'format') {
      this.localConfig.displayPanel = 'format'
    } else {
      this.localConfig.displayPanel = null
    }
    //console.log(this.lcoalConfig.displayPanel)

    this.closeMenu()
  }
  FloatActionButton.methods.clear = function () {
    if (window.confirm('Are you sure?')) {
      this.localConfig.textContent = ''
      this.localConfig.filename = null
      //this.clearHistory()
    }
    this.closeMenu()
  }
  
  FloatActionButton.methods.searchWeb = function () {
    let text = this.config.selectedText
    
    if (!text || text === '') {
      this.closeMenu()
      return false
    }
    
    let url = `https://www.google.com/search?q=` + text
    window.open(url, '_blank')
    
    this.closeMenu()
  }
  /*
   formatCode () {
   this.$parent.formatCode()
   this.closeMenu()
   }
   */

   FloatActionButton.methods.initPopup = function () {
     //console.log('initPopup')
     let $el = $(this.$el)
     
     let options = {
       position: 'top center',
       boundary: 'body'
     }
     
     if (this.positionBottom === false) {
       options.position = 'bottom center'
     }
     
     $el.find('.popup:not(.inited)').addClass('inited').popup(options)
   }
}