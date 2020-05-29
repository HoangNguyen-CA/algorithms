/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  backtrack(nums, 0, res);
  return res;
};

function backtrack(nums, l, res) {
  if (l >= nums.length - 1) {
    res.push([...nums]);
    return;
  } else {
    for (let i = l; i < nums.length; i++) {
      let check = checkSwap(nums, l, i);
      if (check) {
        swap(nums, l, i);
        backtrack(nums, l + 1, res);
        swap(nums, l, i);
      }
    }
  }
}

function checkSwap(nums, l, i) {
  for (let j = l; j < i; j++) {
    if (nums[i] === nums[j]) {
      return false;
    }
  }
  return true;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(permuteUnique([1, 2, 1, 2]));
