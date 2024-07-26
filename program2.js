const decodeTheRing = function (s, p) {


  let msgLen = s.length;
  let keyLen = p.length;
  let i = 0;
  let j = 0;
  let starIdx = -1;
  let match = 0;

  while (i < msgLen) {

    if (j < keyLen && (p[j] === "?" || p[j] === s[i])) {
      i++;
      j++;
    }


    else if (j < keyLen && p[j] === "*") {
      starIdx = j;
      match = i;
      j++;
    }

  
    else if (starIdx != -1) {
      j = starIdx + 1;
      match++;
      i = match;
    }

  
    else {
      return false;
    }
  }



  if (j < keyLen && p[j] === "*") {
    return j++;
  }

  if (j === keyLen) return true;
  else return false;
};


module.exports = decodeTheRing;