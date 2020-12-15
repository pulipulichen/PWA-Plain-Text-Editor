export default function (ReplacePanel) {
  ReplacePanel.methods.copyCalcResult = function () {
    this.utils.ClipboardUtils.copyPlainString(this.calcResult)
    this.calcResultCopied = true
  }
}
    