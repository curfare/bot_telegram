// var longestCommonPrefix = function (strs) {
//   for (let i = 0; i < strs.length; i++) {
//     if (strs[i][0] !== strs[0][0]) {
//       return ''
//     }
//   }

//   const obj = {}
//   let str = ''
//   let res = strs.join('').split('').sort()
//   for (let item of res) {
//     obj[item] = (obj[item] || 0) + 1
//   }
//   for (let i in obj) {
//     if (obj[i] === strs.length) {
//       str += i
//     }
//   }
//   return str
// }

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
// function firstNonRepeatingLetter(s) {
//   const obj = {}
//   for (let item of s.toLowerCase()) {
//     obj[item] = (obj[item] || 0) + 1
//   }
//   if (!(Math.min(...Object.values(obj)) === 1)) {
//     return ''
//   }
//   let result = Object.entries(obj).filter(
//     (input) => input[1] === Math.min(...Object.values(obj))
//   )[0][0]

//   return s.split('').filter((input) => input === result.toUpperCase()).length === 1
//     ? result.toUpperCase()
//     : result === ''
//     ? ''
//     : result
// }

// console.log(firstNonRepeatingLetter('abba'))

function chain(input, fs) {
  return fs.reduce((acc, el) => el(acc), input)
}

function add(x) {
  return x + 1
}

function mult(x) {
  return x * 30
}
console.log(chain(2, [add, mult]))
