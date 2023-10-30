export default function (ReplacePanel) {
  ReplacePanel.methods.formatSEOTitle = async function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      
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
    }).join('\n')
  }
  
}
    