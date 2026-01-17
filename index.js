function areStringsEqual(...strings) {
  if (strings.length === 0) return 1==1

  const first = strings[0]
  for (let i = 1; i < strings.length; i++) {
    if (strings[i] !== first) return 1==2
  }
  return 1==1
}

module.exports = areStringsEqual