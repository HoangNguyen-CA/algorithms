/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let res = [];
  backtrack(S, 0, [], res);
  return res;
};

var backtrack = function (S, pos, currStr, res) {
  if (currStr.length === S.length) {
    res.push(currStr.join(''));
    return;
  } else {
    let c = S[pos];

    if (/^[A-Za-z]+$/.test(c)) {
      currStr.push(c.toUpperCase());
      backtrack(S, pos + 1, currStr, res);
      currStr.pop();
      currStr.push(c.toLowerCase());
      backtrack(S, pos + 1, currStr, res);
      currStr.pop();
    } else {
      currStr.push(c);
      backtrack(S, pos + 1, currStr, res);
      currStr.pop();
    }
  }
};

console.log(letterCasePermutation('a1b2'));

//test