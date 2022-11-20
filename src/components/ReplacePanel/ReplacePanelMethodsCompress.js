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

    if (this.textContentTrim.split(splitor).length < this.textContentTrim.split('\t').length) {
      splitor = '\t'
    }
    
    let parts = this.textContentTrim.split(splitor).map(item => {
      if (isNaN(item)) {
        return item
      }
      else {
        return Number(item)
      }
    })
    this.localConfig.textContent = JSON.stringify(parts)
    this.localConfig.formatTool = 'json-to-lines'
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
      this.localConfig.formatTool = 'code-to-json'
    }
    catch (e) {
      window.alert(e)
      return false
    }
  }
}
    