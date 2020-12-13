module.exports = {
    data() {
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
      config () {
        return this.$parent.config
      },
      computedStyle () {
        
        if (this.positionBottom === false) {
          return false
        }
        
        let style = {
          'bottom': `calc(1rem + ${this.$parent.panelHeight})`
        }
        //console.log(style)
        return style
      },
      computedClassNameList () {
        return {
          top: !this.positionBottom,
          'display-replace-panel': (this.$parent.config.displayPanel === 'replace')
        }
      }
    },
    methods: {
      openConfigModal () {
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
        let text = this.$parent.config.textContent
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function () {
          //console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
          //console.error('Async: Could not copy text: ', err);
        });
        
        this.showMenu = false
      },
      fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
      },
      closeMenu() {
        this.showMenu = false
      },
      toggleReplacePanel() {
        //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
        //console.log(this.$parent.config.displayReplacePanel)
        if (this.$parent.config.displayPanel !== 'replace') {
          this.$parent.config.displayPanel = 'replace'
        }
        else {
          this.$parent.config.displayPanel = null
        }
        
        this.closeMenu()
      },
      toggleFormatPanel() {
        //this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
        //console.log(this.$parent.config.displayReplacePanel)
        if (!this.$parent.config.displayPanel !== 'format') {
          this.$parent.config.displayPanel = 'format'
        }
        else {
          this.$parent.config.displayPanel = null
        }
        //console.log(this.$parent.config.displayPanel)
        
        this.closeMenu()
      },
      clear() {
        this.$parent.clearTextContentConfirm()
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