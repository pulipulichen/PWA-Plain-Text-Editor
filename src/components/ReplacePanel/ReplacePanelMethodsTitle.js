export default function (ReplacePanel) {
  ReplacePanel.methods.formatSEOTitle = async function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      
      if (line.indexOf('-') === -1 && line.indexOf(' ') === -1) {
        
        line = line.replace(/[^\w\s]|_/g, ' ')
        line = line.trim()

        while (line.indexOf('  ') > -1) {
          line = line.split('  ').join(' ')
        }
        line = line.split(' ').join('-')

        if (line.lastIndexOf('.') > -1) {
          line = line.slice(0, line.lastIndexOf('.'))
        }

        return line
      }
    }).join('\n')
  }

  function convertToReadableString(inputString) {
    return inputString
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Handles consecutive capital letters
      .toLowerCase(); // Convert the entire string to lowercase
  }

  ReplacePanel.methods.formatVariableNameHyper = async function (seperator = '-', force = false) {
    // console.log('formatVariableNameHyper', force, this.localConfig.textContent.indexOf(' '), this.localConfig.textContent.indexOf(seperator))
    if (force === false && 
        this.localConfig.textContent.indexOf(' ') === -1 && 
        this.localConfig.textContent.indexOf(seperator) > -1) {
      return this.formatVariableCamelCase(true)
    }

    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      line = line.split('-').join(' ')
      line = line.split('_').join(' ')

      line = convertToReadableString(line)
      // console.log(line)

      line = this.lowerCamelToSpaceCase(line)
      // line = line.toLowerCase()
      line = line.replace(/[^\w\s]|_/g, ' ')
      line = line.replace(/#/g, ' ')
      line = line.trim()

      while (line.indexOf('  ') > -1) {
        line = line.split('  ').join(' ')
      }
      line = line.split(' ').join(seperator)

      if (line.lastIndexOf('.') > -1) {
        line = line.slice(0, line.lastIndexOf('.'))
      }

      return line
    }).join('\n')
    this.utils.ClipboardUtils.copyPlainString(this.localConfig.textContent.trim())
  }

  ReplacePanel.methods.lowerCamelToSpaceCase = function (inputString) {
    return inputString.replace(/[A-Z]/g, match => ' ' + match.toLowerCase());
  }

  ReplacePanel.methods.toLowerCamelCase = function (inputString) {
    return inputString.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  ReplacePanel.methods.formatVariableCamelCase = async function (force = false) {
    // console.log('formatVariableCamelCase')
    // console.log(force)
    // console.log(this.localConfig.textContent.indexOf(' '))
    // console.log(this.localConfig.textContent.match(/[A-Z]/) === null)
    if (force === false && 
        this.localConfig.textContent.indexOf(' ') === -1 && 
        this.localConfig.textContent.match(/[A-Z]/) !== null) {
      return this.formatVariableNameHyper('-', true)
    }

    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      line = line.split('-').join(' ')
      line = line.split('_').join(' ')
      line = line.replace(/[^\w\s]|_/g, ' ')

      while (line.indexOf('  ') > -1) {
        line = line.split('  ').join(' ')
      }
      line = line.trim()

      return this.toLowerCamelCase(line)
    }).join('\n')
    this.utils.ClipboardUtils.copyPlainString(this.localConfig.textContent.trim())
  }
  
}
    