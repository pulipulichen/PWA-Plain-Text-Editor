export default function (ReplacePanel) {
  
  ReplacePanel.computed.isTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      if (line !== line.trim()) {
        return true
      }
    }
    return false
  }
  ReplacePanel.computed.isTrimDisabled = function () {
    if (this.isTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  ReplacePanel.computed.isLTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index > 0) {
        return true
      }
    }
    return false
  }
  
  ReplacePanel.computed.isLTrimDisabled = function () {
    if (this.isLTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
  
  ReplacePanel.computed.isRTrimEnabled = function () {
    for (let i = 0; i < this.textContentLines.length; i++) {
      let line = this.textContentLines[i]
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index < line.length - 1) {
        return true
      }
    }
    return false
  }
  
  
  ReplacePanel.computed.isRTrimDisabled = function () {
    if (this.isRTrimEnabled === true) {
      return undefined
    }
    else {
      return 'disabled'
    }
  }
  
}