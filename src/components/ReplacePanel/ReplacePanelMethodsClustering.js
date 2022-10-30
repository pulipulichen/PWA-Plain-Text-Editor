export default function (ReplacePanel) {
  ReplacePanel.methods.groupingBySimilarity = async function () {
    let groupLength = this.localConfig.GroupingTool.groupLength
    let groupType = this.localConfig.GroupingTool.groupType
    let result = await this.$refs.GroupingTool.groupingBySimilarity(this.dataMatrix, groupType, groupLength)
    this.localConfig.textContent = result.map(line => line.join('\t')).join('\n')
  }
  
  ReplacePanel.methods.groupingByDifference = async function () {
    let groupLength = this.localConfig.GroupingTool.groupLength
    let groupType = this.localConfig.GroupingTool.groupType
    let result = await this.$refs.GroupingTool.groupingByDifference(this.dataMatrix, groupType, groupLength)
    // let result = await this.$refs.GroupingTool.addKmeans(this.dataMatrix, this.localConfig.GroupingTool.members)
    this.localConfig.textContent = result.map(line => line.join('\t')).join('\n')
  }
  
}
    