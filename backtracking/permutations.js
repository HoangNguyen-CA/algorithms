/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  backtrack(nums, 0, res);
  return res;
};

function backtrack(nums, l, res) {
  if (l == nums.length - 1) {
    console.log(nums);
    res.push([...nums]);
  } else {
    for (let i = l; i < nums.length; i++) {
      swap(nums, l, i);
      backtrack(nums, l + 1, res);
      swap(nums, l, i);
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(permute([1, 2, 3]));
