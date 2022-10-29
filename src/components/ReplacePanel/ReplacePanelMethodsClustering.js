export default function (ReplacePanel) {
  ReplacePanel.methods.groupingBySimilarity = async function () {
    let result = await this.$refs.GroupingTool.groupingBySimilarity(this.dataMatrix, this.localConfig.GroupingTool.members)
    this.localConfig.textContent = result.map(line => line.join('\t')).join('\n')
  }
  
  ReplacePanel.methods.groupingByDifference = async function () {
    let result = await this.$refs.GroupingTool.groupingByDifference(this.dataMatrix, this.localConfig.GroupingTool.members)
    // let result = await this.$refs.GroupingTool.addKmeans(this.dataMatrix, this.localConfig.GroupingTool.members)
    this.localConfig.textContent = result.map(line => line.join('\t')).join('\n')
  }
  
}
    