export default function (ReplacePanel) {
  ReplacePanel.computed.calcResult = function () {
    let textContent = this.localConfig.textContent.trim()
    this.calcResultCopied = false

    if (textContent.indexOf('\n') === -1) {
      // 表示只有一行
      try {
        let result
        eval(`result = (${textContent})`)
        return result
      } catch (e) {
      }
    } else {
      // 試著把最後一行加上return
      let lastBreak = textContent.lastIndexOf('\n')
      textContent = textContent.slice(0, lastBreak + 1) + 'return ' + textContent.slice(lastBreak + 1)

      try {
        let result
        eval(`result = (function () {
  ${textContent}
  })()`)
        return result
      } catch (e) {
      }
    }
  }
  ReplacePanel.computed.computedCalcButtonClassName = function () {
    return {
      'disabled': !this.calcResult,
      'positive': (this.calcResult && this.calcResultCopied === false)
    }
  }
  ReplacePanel.computed.computedCalcButtonText = function () {
    let result = this.calcResult

    if (!result) {
      return '(NULL)'
    }

    let lengthLimit = 13

    result = String(result).trim()
    result = result.split('\n').join(' ')
    if (result.length > lengthLimit) {
      result = result.slice(0, lengthLimit)
    }
    return `Copy: ${result}`
  }
}