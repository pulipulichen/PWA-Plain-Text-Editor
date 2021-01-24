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
//    if (this.config.viewportSize.height < this.viewportHeightThreshold) {
//      return undefined
//    }
    if (this.isSpeaking) {
      this.isSpeaking = false
    }
    else if (this.isURLSelected) {
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
      this.utils.ClipboardUtils.copyPlainString(this.config.selectedText)
      //console.log(url)
      window.open(url, '_blank') 
    }
    else if (this.hasSelectedText) {
      this.searchWeb()
    }
    else {
      let mainButtonAction = this.localConfig.mainButtonAction
      let text = this.localConfig.textContent
      
      if (this.lastTextContent !== '') {
        this.restore()
      }
      else if (mainButtonAction === 'copy') {
        this.utils.ClipboardUtils.copyPlainString(text)
      }
      else if (mainButtonAction === 'copy & clear') {
        this.utils.ClipboardUtils.copyPlainString(text)
        //this.localConfig.textContent = ''
        this.clear()
        this.$parent.$refs.CodeMirrorEditor.focus()
      }
      else if (mainButtonAction === 'select all') {
        this.$parent.$refs.CodeMirrorEditor.selectAll()
      }
      
    }

    this.showMenu = false
  }
  
  let $body
  FloatActionButton.methods.closeMenu = function () {
    this.showMenu = false
    
    if (!$body) {
      $body = $('body')
    }
    $body.popup('hide all')
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
  
  FloatActionButton.methods.restore = function () {
    if (this.lastTextContent === '') {
      return false
    }
    
    this.localConfig.textContent = this.lastTextContent
    this.localConfig.filename = this.lastFilename
    
    this.lastTextContent = ''
    this.lastFilename = null
    
    this.closeMenu()
  }
  
  FloatActionButton.methods.clear = function () {
    this.lastTextContent = this.localConfig.textContent
    this.lastFilename = this.localConfig.filename
    
//    if (window.confirm('Are you sure?')) {
//      this.localConfig.textContent = ''
//      this.localConfig.filename = null
//      //this.clearHistory()
//    }
    
    this.localConfig.textContent = ''
    this.localConfig.filename = null
    
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
       boundary: 'body',
       exclusive: true,
     }
     
     if (this.positionBottom === false) {
       options.position = 'bottom center'
     }
     
     $el.find('.popup:not(.inited)').addClass('inited').popup(options)
             .click(function () {
               $(this).popup('hide all')
              })
              
      if (!$body) {
        $body = $('body')
      }
      $body.click(() => {
        $body.popup('hide all')
      })
   }
}