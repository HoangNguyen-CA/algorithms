function partition(arr, l, r) {
  let pivot = arr[r];

  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  let p = i + 1;
  swap(arr, p, r);
  return p;
}

//choose pivot to be rightmost index;
function quickSort(arr, l, r) {
  if (l < r) {
    let p = partition(arr, l, r);

    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
  }
}

//utility
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [9, 5, 3, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
