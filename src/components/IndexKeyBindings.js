import hotkeys from './vendors/hotkeys/hotkeys.webpack.js'

export default function (Index) {
  Index.methods.getKeyBindsConfig = function () {
    return {
      'ctrl+shift+q': (event, handler) => {
        console.log('ok')
      }
    }
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