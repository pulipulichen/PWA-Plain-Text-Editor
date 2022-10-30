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
  // },
  methods: {
    test202210300033: async function () {

      var vector = [
        [1, 10, 2, 30],
        ['A', 30, 20, 2],
        ['B', 30, 30, 3],
        ['C', 30, 31, 3],
        ['A', 10, 10, 1],
        ['B', 20, 1, 30],
        ['C', 1, 25, 30]
      ]
      // console.log(await this.toVector(vector))
      console.log(await this.addKmeans(vector))
      console.log(await this.addGroupInDifference(vector))
      console.log(await this.addGroupInSimilarity(vector))

    },
    toVector: async function(data) {
      let rows = new Array(data.length)
      let columeLength = data[0].length

      for (let c = 0; c < columeLength; c++) {
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
            normalized = list.map(value => ((value - min) / range))
          }
          else {
            normalized = list
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
          for (let i = 0; i < Object.keys(map).length; i++) {
            v[i] = 0
          }
          // console.log(v)
          for (let d = 0; d < data.length; d++) {
            let value = data[d][c]
            value = value + ''
            let i = map[value]
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

      return rows
    },
    kmeans: async function (data, cluster = 3) {
      let vector = await this.toVector(data)
      return new Promise(function (resolve, reject) {
        // console.log(cluster)
        kmeans(vector, cluster, function(err, clusterVector, clusterIndex, cluster, centroids) {
          if (err) {
            // throw new Error(err)
            return reject(err)
          }
      
          //do something with the result
          // console.log(res)
          resolve({
            clusterVector,
            clusterIndex,
            cluster,
            centroids
          })
      })
      })
      // console.log(vector) 
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
      let result = await this.kmeans(vector, member)
      // console.log(result)

      let groups = Math.ceil(vector.length / member)
      
      if (groupType === 'group') {
        groups = member
        member = Number(Math.floor(vector.length / groups))
      }
      console.log(groups, member)
      
      let groupIndexList = []
      let mod = vector.length % groups
      let minMembers = Math.floor(vector.length / groups)

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
          let v = result.clusterIndex[(clusterI % groups)]
          
          // console.log(v, counter, vector.length) 
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
    }
  }
}

export default GroupingTool