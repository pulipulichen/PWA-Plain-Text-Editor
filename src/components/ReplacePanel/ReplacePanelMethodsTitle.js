export default function (ReplacePanel) {
  ReplacePanel.methods.formatSEOTitle = async function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      
      if (line.indexOf('-') === -1 && line.indexOf(' ') === -1) {
        line = line.toLowerCase()
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

  ReplacePanel.methods.formatVariableNameHyper = async function (seperator = '-') {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      line = line.split('-').join(' ')
      line = line.split('_').join(' ')
      
      line = this.lowerCamelToSpaceCase(line)
      line = line.toLowerCase()
      line = line.replace(/[^\w\s]|_/g, ' ')
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
  }

  ReplacePanel.methods.lowerCamelToSpaceCase = function (inputString) {
    return inputString.replace(/[A-Z]/g, match => ' ' + match.toLowerCase());
  }

  ReplacePanel.methods.toLowerCamelCase = function (inputString) {
    return inputString.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  ReplacePanel.methods.formatVariableCamelCase = async function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      line = line.split('-').join(' ')
      line = line.split('_').join(' ')
      while (line.indexOf('  ') > -1) {
        line = line.split('  ').join(' ')
      }
      line = line.trim()

      return this.toLowerCamelCase(line)
    }).join('\n')
  }
  
}
    