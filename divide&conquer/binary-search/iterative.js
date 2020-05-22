function BS(arr, target) {
  let l = 0;
  let h = arr.length - 1;
  let mid;
  while (l <= h) {
    mid = Math.floor((l + h) / 2);
    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
}

console.log(BS([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
