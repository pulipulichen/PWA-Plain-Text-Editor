import kmeans from './kmeans.js'

let GroupingTool = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  // computed: {
    
  // },
  // mounted: async function () {
  //   this.test202210301729()
  // },
  methods: {
    test202210300033: async function () {

      // var vector = [
      //   [1, 10, 2, 30],
      //   ['A', 30, 20, 2],
      //   ['B', 30, 30, 3],
      //   ['C', 30, 31, 3],
      //   ['A', 10, 10, 1],
      //   ['B', 20, 1, 30],
      //   ['C', 1, 25, 30]
      // ]

      var vector = [
        [10, 2, 30],
        [30, 20, 2],
        [30, 30, 3],
        [30, 31, 3],
        [10, 10, 1],
        [20, 1, 30],
        [1, 25, 30]
      ]


      // console.log(await this.toVector(vector))
      // console.log(await this.addKmeans(vector))
      // console.log(await this.addGroupInDifference(vector))
      // console.log(await this.addGroupInSimilarity(vector))
      // console.log(vector)
      console.log(await this.kmeans(vector, 3))
    },
    test202210301729: async function () {

      var vector = [
        [1, 2, 3, 1],
        [5,2,3,1],
        [1,2,4,0],
        [5,3,4,0]
      ]


      // console.log(await this.toVector(vector))
      // console.log(await this.addKmeans(vector))
      // console.log(vector)
      // console.log(await this.kmeans(vector, 2))
      // console.log(await this.groupingBySimilarity(vector, 'member', 2))
      // console.log(await this.groupingByDifference(vector, 'member', 2))
    },
    toVector: async function(data) {
      // console.log(data)


      let rows = new Array(data.length)
      let columeLength = data[0].length

      for (let c = this.localConfig.GroupingTool.skipColumns; c < columeLength; c++) {
        let list = []
        let isColumnNumber = true

        for (let d = 0; d < data.length; d++) {
          let value = data[d][c]
          let isNumber = (typeof(value) === 'number')
          if (isNumber === false) {
            isColumnNumber = false
            break
          }
          else {
            list.push(value)
          }
        }

        // console.log(isColumnNumber)

        if (isColumnNumber === true) {
          let max = Math.max(...list)
          let min = Math.min(...list)
          let range = max - min
          if (range === 0) {
            continue
          }

          let normalized
          if (max === 1 && min === 0) {
            normalized = list
          }
          else {
            normalized = list.map(value => ((value - min) / range))
          }

          for (let r = 0; r < rows.length; r++) {
            if (!rows[r]) {
              rows[r] = []
            }

            rows[r].push(normalized[r])
          }
        }
        else {
          let map = {}
          
          let id = 0
          for (let d = 0; d < data.length; d++) {
            let value = data[d][c]
            value = value + ''
            // console.log(value)
            if (!map[value]) {
              map[value] = id
              id++
            }
            list.push(value)
          }

          // console.log(map, list)

          let vectors = []
          let v = []
          let keys = Object.keys(map)
          for (let i = 0; i < keys.length; i++) {
            v[i] = 0
          }
          // console.log(v)

          for (let d = 0; d < data.length; d++) {
            let value = data[d][c]
            value = value + ''
            let i = keys.indexOf(value)
            // console.log(i)
            let v2 = [].concat(v)
            v2[i] = 1
            vectors.push(v2)
          }
          // console.log(vectors)

          vectors.forEach((vector, r) => {
            if (!rows[r]) {
              rows[r] = []
            }
            rows[r] = rows[r].concat(vector)
          })
        }
      }

      // console.log(rows)

      return rows
    },
    // kmeans: async function (data, cluster = 3) {
    //   let vector = await this.toVector(data)
    //   return new Promise(function (resolve, reject) {
    //     // console.log(cluster)
    //     kmeans(vector, cluster, function(err, clusterVector, clusterIndex, cluster, centroids) {
    //       if (err) {
    //         // throw new Error(err)
    //         return reject(err)
    //       }
      
    //       //do something with the result
    //       // console.log(res)
    //       resolve({
    //         clusterVector,
    //         clusterIndex,
    //         cluster,
    //         centroids
    //       })
    //     })
    //   })
    //   // console.log(vector) 
    // },
    kmeans: async function (data, cluster = 3) {
      let vector = await this.toVector(data)
      // return new Promise(function (resolve, reject) {
        // console.log(cluster)
        // resovle(kmeans(vector, cluster))
      // })
      // console.log(vector) 
      let result = kmeans(vector, cluster)
      // console.log(result)
      return result
    },
    addKmeans: async function (vector, cluster = 3) {
      let result = await this.kmeans(vector, cluster)

      return vector.map((item, i) => {
        // console.log(item, i, result.clusterIndex)
        item.push(result.clusterVector[i])
        return item
      })
    },
    groupingByDifference: async function (vector, groupType = 'member', member = 3) {
      member = Number(member)
      let {clusterIndex} = await this.kmeans(vector, member)

      // 合併與計算比例
      clusterIndex = this.balanceClusters(clusterIndex, Math.ceil(vector.length / member), Math.floor(vector.length / member))

      // console.log(clusterIndex)
      // return false

      let groups = Math.ceil(vector.length / member)
      
      if (groupType === 'group') {
        groups = member
        member = Number(Math.floor(vector.length / groups))
      }
      // console.log(groups, member)
      
      let groupIndexList = []
      let mod = vector.length % groups
      let minMembers = Math.floor(vector.length / groups)
      // return console.log(member, Math.floor(vector.length / groups))
      // let minMembers = member

      let counter = 0
      // console.log(groups)
      for (let i = 0; i < groups; i++) {
        let group = []

        let clusterI = 0
        let baseMember = minMembers
        if (i < mod) {
          baseMember++
        }

        // console.log(baseMember)
        // continue

        while (true) {
          let v = clusterIndex[(clusterI % clusterIndex.length)]
          
          // console.log(groups, clusterI, v, counter, vector.length) 
          if (v.length === 0) {
            clusterI++
            continue
          }

          let randomId = Math.floor(Math.random() * v.length)
          let item = v[randomId]
          group.push(Number(item))
          // console.log(item)
          
          v.splice(randomId, 1)
          // console.log(vector)
          // clusterVector[(clusterI % member)] = v
          // console.log(result.clusterVector)
          // console.log(v)

          clusterI++
          counter++
          // console.log(counter, group.length, member)
          if (counter === vector.length) {
            break
          }

          if (group.length === baseMember) {
            break
          }
        }
        // console.log(group)
        groupIndexList.push(group)
      }

      // console.log(groupIndexList)

      // let invertGroup = new Array(groups)
      let output = [].concat(vector)
      groupIndexList.forEach((list, groupId) => {
        list.forEach(index => {
          let o = [].concat(output[index])
          o.push(groupId)
          output[index] = o
        })
      })

      return output
    },
    balanceClusters (clusterIndex, maxMembers, minMembers) {
      
      // if (maxMembers === minMembers) {
      //   minMembers--
      // }
      // return false
      this.sortClusterIndexBySize(clusterIndex)
      // console.log(JSON.stringify(clusterIndex, null, 2), maxMembers, minMembers)

      while (clusterIndex[clusterIndex.length - 1].length === 0) {
        let tempCluster = []
        let largestCluster = clusterIndex[0]
        while (tempCluster.length < minMembers) {
          let randomId = Math.floor(Math.random() * largestCluster.length)
          tempCluster.push(largestCluster[randomId])
          largestCluster.splice(randomId, 1)
          // console.log(tempCluster)
        }
        clusterIndex[0] = largestCluster
        clusterIndex[(clusterIndex.length - 1)] = tempCluster

        this.sortClusterIndexBySize(clusterIndex)
      }

      // console.log(clusterIndex)
      let isValid = true
      for (let i = 0; i < clusterIndex.length; i++) {
        if (clusterIndex[i].length > maxMembers) {
          isValid = 1
          break
        }
        if (clusterIndex[i].length < minMembers) {
          isValid = 2
          break
        }
      }

      
      if (isValid === true) {
        return clusterIndex
      }
      else if (isValid === 1) {
        // 最小的，合併
        let len = clusterIndex.length
        let minCluster = clusterIndex[(len - 1)]
        let baseIndex = (len - 2)
        while (clusterIndex[baseIndex].length < maxMembers) {
          let randomId = Math.floor(Math.random() * minCluster.length)
          clusterIndex[baseIndex].push(minCluster[randomId])
          minCluster.splice(randomId, 1)
          // console.log(tempCluster)

          if (minCluster.length === 0) {
            break
          }
          if (clusterIndex[baseIndex].length === maxMembers && 
              minCluster.length > 0) {
            baseIndex--
          }

          if (baseIndex === -1) {
            break
          }
        }
        
        // clusterIndex[(len - 2)] = clusterIndex[(len - 2)].concat(clusterIndex[(len - 1)])

        // 最大的，拆一半
        let tempCluster = [].concat(minCluster)
        let largestCluster = clusterIndex[0]
        while (tempCluster.length < minMembers) {
          let randomId = Math.floor(Math.random() * largestCluster.length)
          tempCluster.push(largestCluster[randomId])
          largestCluster.splice(randomId, 1)
          // console.log(tempCluster)
        }
        clusterIndex[0] = largestCluster
        clusterIndex[(len - 1)] = tempCluster

        // console.log(clusterIndex)
        // return false
        return this.balanceClusters(clusterIndex, maxMembers, minMembers)
      }
      else {
        // 最小的，合併
        let len = clusterIndex.length
        let maxCluster = clusterIndex[0]
        let randomId = Math.floor(Math.random() * maxCluster.length)
        clusterIndex[(len - 1)].push(maxCluster[randomId])
        maxCluster.splice(randomId, 1)
        clusterIndex[0] = maxCluster
        // let baseIndex = (len - 2)
        // while (clusterIndex[baseIndex].length < maxMembers) {
        //   let randomId = Math.floor(Math.random() * minCluster.length)
        //   clusterIndex[baseIndex].push(minCluster[randomId])
        //   minCluster.splice(randomId, 1)
        //   // console.log(tempCluster)

        //   if (minCluster.length === 0) {
        //     break
        //   }
        //   if (clusterIndex[baseIndex].length === maxMembers && 
        //       minCluster.length > 0) {
        //     baseIndex--
        //   }
        // }
        
        // // clusterIndex[(len - 2)] = clusterIndex[(len - 2)].concat(clusterIndex[(len - 1)])

        // // 最大的，拆一半
        // let tempCluster = []
        // let largestCluster = clusterIndex[0]
        // while (tempCluster.length < minMembers) {
        //   let randomId = Math.floor(Math.random() * largestCluster.length)
        //   tempCluster.push(largestCluster[randomId])
        //   largestCluster.splice(randomId, 1)
        //   // console.log(tempCluster)
        // }
        // clusterIndex[0] = largestCluster
        // clusterIndex[(len - 1)] = tempCluster

        // // console.log(clusterIndex)
        // return false
        return this.balanceClusters(clusterIndex, maxMembers, minMembers)
      }
    },
    groupingBySimilarity: async function (vector, groupType = 'member', member = 3) {
      member = Number(member)
      let groups = Math.ceil(vector.length / member)

      if (groupType === 'group') {
        groups = member
        member = Math.ceil(vector.length / groups)
      }

      // console.log(groups, member)

      let {clusterIndex} = await this.kmeans(vector, groups)
      // console.log(clusterIndex) 
      this.sortClusterIndexBySize(clusterIndex)
      while (true) {
        let isFinish = true
        
        for (let i = 0; i < clusterIndex.length; i++) {
          let list = clusterIndex[i]
          if (list.length <= member && list.length >= member - 1) {
            continue
          }

          isFinish = false

          if (list.length > member) {
            let randomId = Math.floor(Math.random() * list.length)
            clusterIndex[(clusterIndex.length - 1)].push(list[randomId])
            list.splice(randomId, 1)
          }
          else {
            let randomId = Math.floor(Math.random() * clusterIndex[0].length)
            clusterIndex[i].push(clusterIndex[0][randomId])
            clusterIndex[0].splice(randomId, 1)
          }
            

          this.sortClusterIndexBySize(clusterIndex)
          break
        }


        if (isFinish) {
          break
        }
        
      }

      Object.keys(clusterIndex).forEach(groupId => {
        clusterIndex[groupId].forEach(i => {
          vector[i].push(Number(groupId))
        })
      })

      return vector
    },
    sortClusterIndexBySize (clusterIndex) {
      clusterIndex.sort((a, b) => {
        return b.length - a.length
      })
    },
    removeLastColumn () {
      let data = this.$parent.dataMatrix
      // console.log(data)
      data = data.map(row => row.slice(0, row.length - 1))
      // console.log(data)
      this.localConfig.textContent = data.map(line => line.join('\t')).join('\n')
    }
  }
}

export default GroupingTool