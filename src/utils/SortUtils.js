export default {
  sort: function (strAry, reverse = false, orderBy = [ 'number', 'english', 'non-english']) {
    // console.log(reverse)
    return strAry.sort((a, b) => {
      if (this.compareTwoArrays(orderBy, ['number', 'english', 'non-english'])) {
        return this.sortOrderByNumberEnglishNonEnglish(a, b, reverse)
      }
      else if (this.compareTwoArrays(orderBy, ['number', 'non-english', 'english'])) {
        return this.sortOrderByNumberNonEnglishEnglish(a, b, reverse)
      }
      else if (this.compareTwoArrays(orderBy, ['english', 'number', 'non-english'])) {
        return this.sortOrderByEnglishNumberNonEnglish(a, b, reverse)
      }
      else if (this.compareTwoArrays(orderBy, ['english', 'non-english', 'number'])) {
        return this.sortOrderByEnglishNonEnglishNumber(a, b, reverse)
      }
      else if (this.compareTwoArrays(orderBy, ['non-english', 'english', 'number'])) {
        return this.sortOrderByNonEnglishEnglishNumber(a, b, reverse)
      }
      else if (this.compareTwoArrays(orderBy, ['non-english', 'number', 'english'])) {
        return this.sortOrderByNonEnglishNumberEnglish(a, b, reverse)
      }
    })
  },
  sortOrderByNumberEnglishNonEnglish: function (a, b, reverse = false) {
    // console.log(a, b)
    let compareFilterNumberResult = this.compareFilterNumber(a, b, reverse);
    // console.log(compareFilterNumberResult)
    if (compareFilterNumberResult !== 0) {
      return compareFilterNumberResult
    }
    // console.log(reverse)
    return this.compareFilterString(a, b, reverse)
  },
  sortOrderByNumberNonEnglishEnglish: function (a, b, reverse = false) {
    // console.log(a, b)
    let compareFilterNumberResult = this.compareFilterNumber(a, b, reverse);
    // console.log(compareFilterNumberResult)
    if (compareFilterNumberResult !== 0) {
      return compareFilterNumberResult
    }
    // console.log(reverse)
    return this.compareFilterString(a, b, reverse, false)
  },
  sortOrderByEnglishNumberNonEnglish: function (a, b, reverse = false) {

    let compareStartsWithEnglishResult = this.compareStartsWithEnglish(a, b, reverse)
    if (compareStartsWithEnglishResult !== 0) {
      return compareStartsWithEnglishResult
    }

    // console.log(a, b)
    let compareFilterNumberResult = this.compareFilterNumber(a, b, reverse);
    // console.log(compareFilterNumberResult)
    if (compareFilterNumberResult !== 0) {
      return compareFilterNumberResult
    }
    // console.log(reverse)
    return this.compareFilterString(a, b, reverse, false)
  },
  sortOrderByEnglishNonEnglishNumber: function (a, b, reverse = false) {
    // console.log('sortOrderByEnglishNonEnglishNumber') 
    let compareStartsWithEnglishResult = this.compareStartsWithEnglish(a, b, reverse)
    // console.log(a, b, compareStartsWithEnglishResult)
    if (compareStartsWithEnglishResult !== 0) { 
      return compareStartsWithEnglishResult
    }

    // console.log(a, b)
    let compareStartsWithChineseResult = this.compareStartsWithChinese(a, b, reverse, true)
    
    if (compareStartsWithChineseResult !== 0) {
      return compareStartsWithChineseResult  
    }
    // console.log(reverse)
    return this.compareFilterNumber(a, b, reverse, false)
  },
  sortOrderByNonEnglishEnglishNumber: function (a, b, reverse = false) {


    // console.log(a, b)
    let compareStartsWithChineseResult = this.compareStartsWithChinese(a, b, reverse, true)
    
    if (compareStartsWithChineseResult !== 0) {
      return compareStartsWithChineseResult  
    }

    // console.log('sortOrderByEnglishNonEnglishNumber') 
    let compareStartsWithEnglishResult = this.compareStartsWithEnglish(a, b, reverse)
    // console.log(a, b, compareStartsWithEnglishResult)
    if (compareStartsWithEnglishResult !== 0) { 
      return compareStartsWithEnglishResult
    }
    // console.log(reverse)
    return this.compareFilterNumber(a, b, reverse, false)
  },
  sortOrderByNonEnglishNumberEnglish: function (a, b, reverse = false) {
    let compareStartsWithEnglishResult = this.compareStartsWithChinese(a, b, reverse)
    if (compareStartsWithEnglishResult !== 0) {
      return compareStartsWithEnglishResult
    }

    // console.log(a, b)
    let compareFilterNumberResult = this.compareFilterNumber(a, b, reverse);
    // console.log(compareFilterNumberResult)
    if (compareFilterNumberResult !== 0) {
      return compareFilterNumberResult
    }
    // console.log(reverse)
    return this.compareFilterString(a, b, reverse, false)
  },
  compareTwoArrays: function (arr1, arr2) {
    if (arr1.length !== arr2.length)
    return false;

    return arr1.every((element, index) => {
      return element === arr2[index]
    });
  },
  compareStartsWithEnglish: function (a, b, reverse = false) {
    let reverseAdj = 1
    if (!reverse) { 
      reverseAdj = -1
    }

    if (this.startsWithEnglishChar(a) && this.startsWithEnglishChar(b)) {
      return a.localeCompare(b, 'zh-hant') * reverseAdj
    }
    else if (this.startsWithEnglishChar(a) && !this.startsWithEnglishChar(b)) {
      return -1 * reverseAdj
    }
    else if (!this.startsWithEnglishChar(a) && this.startsWithEnglishChar(b)) {
      return 1 * reverseAdj
    }
    else {
      return 0
    }
  },
  compareStartsWithChinese: function (a, b, reverse = false) {
    let reverseAdj = 1
    if (!reverse) {
      reverseAdj = -1
    }

    if (this.isChineseChar(a) && this.isChineseChar(b)) {
      return a.localeCompare(b, 'zh-hant') * reverseAdj
    }
    else if (this.isChineseChar(a) && !this.isChineseChar(b)) {
      return -1 * reverseAdj
    }
    else if (!this.isChineseChar(a) && this.isChineseChar(b)) {
      return 1 * reverseAdj
    }
    else {
      return 0
    }
  },
  compareFilterString: function (a, b, reverse = false, englishFirst = true) {
    let reverseAdj = 1
    if (!reverse) {
      reverseAdj = -1
    }

    let englishFirstAdj = 1
    if (!englishFirst) {
      englishFirstAdj = -1
    }

    if (this.filterNumber(a) !== false && this.filterNumber(b) !== false) {
      return 0 
    } 

    let rule = 'zh-hant'
    if (this.isChineseChar(a) && this.isChineseChar(b)) {
      rule = 'zh-hant'
    }
    else if (!this.isChineseChar(a) && this.isChineseChar(b)) {
      return -1 * reverseAdj * englishFirstAdj
    }
    else if (this.isChineseChar(a) && !this.isChineseChar(b)) {
      return 1 * reverseAdj * englishFirstAdj
    }

    if (reverse) {
      return a.localeCompare(b, rule)
    }
    else {
      return b.localeCompare(a, rule)
    }
  },
  compareFilterNumber: function (a, b, reverse = false, numberFirst = true) {
    let reverseAdj = 1
    if (!reverse) {
      reverseAdj = -1
    }

    let numberFirstAdj = 1
    if (!numberFirst) {
      numberFirstAdj = -1
    }

    let aNumber = this.filterNumber(a)
    let bNumber = this.filterNumber(b)

    if (aNumber === bNumber) {
      return 0
    }
    else if (aNumber === false && typeof(bNumber) === 'number') {
      return 1 * reverseAdj * numberFirstAdj
    }
    else if (bNumber === false && typeof(aNumber) === 'number') {
      return -1 * reverseAdj * numberFirstAdj
    }
    else if (typeof(aNumber) === 'number' && typeof(bNumber) === 'number') {
      return (aNumber - bNumber) * reverseAdj
    }
    else {
      return 0
    }
  },
  filterNumber: function (str) {
    if (Array.isArray(str)) {
      str = str.join(' ')
    }
    else if (typeof(str) === 'object') {
      return false
    }

    if (typeof(str) === 'number') {
      return str
    }
    else if (typeof(str) === 'string') {
      if (this.startsWithNumber(str)) {
        return this.getStartsWithNumber(str)
      }
      else {
        return false
      }
    }
    else if (typeof(str) === 'boolean') {
      if (!str) {
        return 0
      }
      else {
        return 1
      }
    }
  },
  isNumber: function (x) {
    return !isNaN(Number(x))
  },
  startsWithNumber: function (x) {
    return /^\d/.test(x)
  },
  getStartsWithNumber: function (str) {
    return Number(str.match(/^\d+/)[0])
  },
  isChineseChar: function (x) {
    if (typeof(x) !== 'string') {
      return false
    }
    if (x.length > 1) {
      x = x.charAt(0)
    }

    return /[\u4e00-\u9fa5]/.test(x)
  },
  startsWithEnglishChar: function(str) {
    if (typeof(str) !== 'string') {
      return false
    }
    if (str.length > 1) {
      str = str.charAt(0)
    }

    const regex = /^[A-Za-z]/;
    return regex.test(str);
  }
}