module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(item => item.join(''));

  function includesBracketsPair (s, b) {
    for (i = 0; i < b.length; i++) {
      if (s.includes(b[i])) {
        return true;
      } 
    } 
    return false;
  }
  function replaceBracketsPair (s, b) {
    for (i = 0; i < b.length; i++ ) {
      s = s.replaceAll(b[i], '')
      }
    return s;
  }
  
  while(includesBracketsPair(str, brackets)) {
    str = replaceBracketsPair(str, brackets)
  }
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
  
}



