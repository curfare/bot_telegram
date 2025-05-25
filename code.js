var prefixCount = function (words, pref) {
  return words.filter((el) => el.startsWith(pref)).length
}

console.log(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at'))
