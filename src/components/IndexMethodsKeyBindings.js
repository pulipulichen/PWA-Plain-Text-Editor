import $ from 'jquery'
import hotkeys from './vendors/hotkeys/hotkeys.webpack.js'

export default function (Index) {
    
  Index.methods.getKeyBindsConfig = function () {
    
    return {
      'ctrl+shift+q': (event, handler) => {
        this.hotkeyTestLoad(event)
      },
      'ctrl+f': (event, handler) => {
        this.hotkeyFind(event, () => {
          this.$refs.CodeMirrorEditor.findNext()
        })
      },
      'ctrl+shift+f': (event, handler) => {
        this.hotkeyFind(event, () => {
          this.$refs.CodeMirrorEditor.findPrev()
        })
      },
      'ctrl+h': (event, handler) => {
        this.hotkeyReplace(event)
      },
      'alt+o': (event, handler) => {
        this.clickFABMainButton(event)
      },
      'alt+s': (event, handler) => {
        this.clickFABSpeakButton(event)
      },
      'esc': (event, handler) => {
        this.onPressEsc(event)
      }
    }
  }
  
  // -------------------
  
  Index.methods.hotkeyFind = function (event, find) {
    event.stopPropagation()
    event.preventDefault()

    let selection = this.$refs.CodeMirrorEditor.getSelectedText()
    if (selection === '') {
      if (this.localConfig.stringToSearch !== '') {
        find()
      }
      else {
        this.hotkeyStartSearch()
      }
    }
    else {
      this.localConfig.displayPanel = 'replace'
      
      if (this.localConfig.stringToSearch !== selection) {
        this.localConfig.stringToSearch = selection
        this.hotkeyStartSearch()
      }
      else {
        find()
      }
    }
  }
  
  Index.methods.hotkeyStartSearch = function () {
    this.localConfig.displayPanel = 'replace'
    this.$refs.ReplacePanel.selectSearchInput()
  }
  
  // --------------------
  
  Index.methods.hotkeyReplace = function (event) {
    event.stopPropagation()
    event.preventDefault()

    this.localConfig.displayPanel = 'replace'
    
    let selection = this.$refs.CodeMirrorEditor.getSelectedText()
    if (selection !== '') {
      this.localConfig.stringToSearch = selection
    }
    this.$refs.ReplacePanel.selectReplaceInput()
  }
  
  // -------------------
  
  Index.methods.hotkeyTestLoad = async function (event) {
    //event.preventDefault()
    //event.stopPropagation()

    //let url = './[demo-content/javascript-example.js'
    let url = './[demo-content/javascript-minified.js'

    let result = await this.utils.AxiosUtils.get(url)
    //let result = '111'
    //console.log(result)
    this.localConfig.textContent = result

    return false

  }
    
  Index.methods.initKeyBinds = function () {
    let config = this.getKeyBindsConfig()
    
    hotkeys(Object.keys(config).join(','), async (event, handler) => {
      let pressKey = handler.key
      
      for (let key in config) {
        if (key === pressKey) {
          await config[key](event, handler)
          return true
        }
      }
    })
  }
  
  Index.methods.clickFABMainButton = function (event) {
    this.$refs.FloatActionButton.onMainIconClick()
  }
  
  Index.methods.clickFABSpeakButton = function (event) {
    this.$refs.FloatActionButton.speakOrStop()
  }
  
  // 連續間隔期間
  let lastPressEscTime
  let pressEscInterval = 2000
  
  Index.methods.onPressEsc = function (event) {
    event.stopPropagation()
    event.preventDefault()

    let currentTime = (new Date()).getTime()
    if (!lastPressEscTime
            || (currentTime - lastPressEscTime) > pressEscInterval) {
      lastPressEscTime = currentTime
      return false
    }

    // 開始正式執行
    
    
    if (this.localConfig.textContent !== '') {
      this.$refs.FloatActionButton.clear()
//      this.localConfig.filename = null
//      this.localConfig.textContent = ''
    }
    else {
      setTimeout(() => {
        window.close()
      }, 50)
    }
    
    lastPressEscTime = null
    return true
  }
}