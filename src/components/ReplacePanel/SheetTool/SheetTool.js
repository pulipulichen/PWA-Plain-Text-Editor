let SheetTool = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
      colNo: 1
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  methods: {
    sortLines: function (textContentLines) {
      if (textContentLines.length < 2) {
        return false // 不需要排序
      }

      let lines = [].concat(textContentLines)
      lines.sort()
      if (lines[0] === textContentLines[0]) {
        lines.reverse()
      }

      this.localConfig.textContent = lines.join('\n')
    },
    shuffleLines(textContentLines) {
      let lines
      let splitor = '\n'

      if (textContentLines.length < 2) {
        if (textContentLines.length === 1 && textContentLines[0].split('\t').length > 2) {
          lines = textContentLines[0].split('\t')
          splitor = '\t'
        }
        else {
          return false // 不需要排序
        }

      }
      else {
        lines = [].concat(textContentLines)
      }


      let shuffled
      while (true) {
        shuffled = lines
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)

        let done = false
        for (let i = 0; i < shuffled.length; i++) {
          if (shuffled[i] !== textContentLines[i]) {
            done = true
            break
          }
        }

        if (done) {
          break
        }
      }

      this.localConfig.textContent = shuffled.join(splitor)
    },
    transpose(textContentLines) {
      let output = []

      textContentLines.forEach((line, y) => {
        line.split('\t').forEach((value, x) => {
          if (!output[x]) {
            output[x] = []
          }
          output[x][y] = value
        })
      })

      this.localConfig.textContent = output.map(line => line.join('\t')).join('\n')
    },
    removeColumn (textContentLines) {
      let seperators = ['\t', ',', ' ']
      this.localConfig.textContent = textContentLines.map(line => {
        let seperator
        for (let i = 0; i < seperators.length; i++) {
          seperator = seperators[i]
          if (line.indexOf(seperator) > -1) {
            break
          }
        }
        
        let columns = line.split(seperator)
        let colIndex = (this.colNo - 1)
        if (columns.length < colIndex && columns.length > 0) {
          colIndex = columns.length - 1
        }

        if (columns.length >= colIndex) {
          columns.splice(colIndex, 1)
        }
        return columns.join(seperator)
      }).join('\n')
    },
    shuffleColumns (textContentLines) {
      this.transpose(textContentLines)
      this.shuffleLines(textContentLines)
      this.transpose(textContentLines)
    }
  }
}

export default SheetTool