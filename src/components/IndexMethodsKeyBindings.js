import $ from 'jquery'
import hotkeys from './vendors/hotkeys/hotkeys.webpack.js'

export default function (Index) {
  Index.methods.getKeyBindsConfig = function () {
    return {
      'ctrl+shift+q': (event, handler) => {
        this.hotkeyTestLoad(event)
      }
    }
  }
  
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
}