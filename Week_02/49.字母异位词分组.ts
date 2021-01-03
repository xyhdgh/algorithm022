function groupAnagrams(strs: string[]): string[][] {
  const len = strs.length
  const map = {}
  if (len === 0) {
      return []
  }
  strs.forEach(str => {
      if (!map[sort(str)]) {
          map[sort(str)] = [str]
      } else {
          map[sort(str)].push(str)
      }
  })
  return Object.keys(map).map(item => map[item])
};

const sort = (str: string): string => {
  return str.split('').sort().join()
}