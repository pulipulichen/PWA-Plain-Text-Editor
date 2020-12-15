export default function (Index) {
    Index.computed.textContentTrim = function () {
      return this.localConfig.textContent.trim()
    }
}