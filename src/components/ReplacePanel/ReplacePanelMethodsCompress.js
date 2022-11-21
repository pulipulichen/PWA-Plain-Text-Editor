import $ from 'jquery'

export default function (ReplacePanel) {

  ReplacePanel.methods.minifiyCode = async function () {
    this.$parent.$refs.CodeMirrorEditor.minify()
    //console.log(mode)
    
    
    //console.error('minifiyCode')
    //let result = await minify(this.localConfig.textContent)
    //console.log(result)
    //this.localConfig.textContent = result
  }
  
  ReplacePanel.methods.beautifyCode = function () {
    //console.error('beautifyCode')
    this.$parent.$refs.CodeMirrorEditor.autoFormat()
    //console.log()
    this.isModifiedAfterBeautification = false
  }

  ReplacePanel.methods.codeToJSON = function () {
    let splitor = '\n'

    if (this.textContentTrim.split(splitor).length * 1.5 < this.textContentTrim.split('\t').length) {
      splitor = '\t'
    }
    
    let parts = []
    
    this.textContentTrim.split(splitor).forEach(item => {
      if (isNaN(item)) {
        if (Array.isArray(parts) === false) {
          let key = item.slice(0, item.indexOf('\t')).trim()
          let value = item.slice(item.indexOf('\t') + 1).trim()
          if (!isNaN(value)) {
            value = Number(value)
          }
          parts[key] = value
        }
        else if (item.split('\t').length > 1) {
          let key = item.slice(0, item.indexOf('\t')).trim()
          let value = item.slice(item.indexOf('\t') + 1).trim()
          if (!isNaN(value)) {
            value = Number(value)
          }
          parts = {}
          parts[key] = value
        }
        else {
          parts.push(item)
        }
        
      }
      else {
        parts.push(item)
      }
    })
    this.localConfig.textContent = JSON.stringify(parts)
    // this.localConfig.formatTool = 'json-to-lines'
  }

  ReplacePanel.methods.JSONtoLines = function () {
    let jsonString = this.textContentTrim

    try {
      let json = JSON.parse(jsonString)

      if (Array.isArray(json)) {
        this.localConfig.textContent = json.map(item => {
          if (typeof(item) === 'object') {
            return JSON.stringify(item)
          }
          return item
        }).join('\n')
      }
      else if (typeof(json) === 'object') {
        let keys = Object.keys(json)

        let lines = []
        keys.forEach(key => {
          let value = json[key]

          if (Array.isArray(value)) {
            value = value.join(';')
          }
          else if (typeof(value) === 'object') {
            value = JSON.stringify(value)
          }
          lines.push(key + '\t' + value)
        })

        this.localConfig.textContent = lines.join('\n')
      }
      // this.localConfig.formatTool = 'code-to-json'
    }
    catch (e) {
      window.alert(e)
      return false
    }
  }
}
    