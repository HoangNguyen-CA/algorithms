function BS(arr, l, r, target) {
  if (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == target) return mid;

    if (target > arr[mid]) {
      return BS(arr, mid + 1, r, target);
    } else {
      return BS(arr, l, mid - 1, target);
    }
  }

  return -1; // base case
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(BS(arr, 0, arr.length - 1, 1));
