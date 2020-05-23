function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  //temp arrays
  let L = [];
  let R = [];

  for (let i = 0; i < n1; i++) {
    L.push(arr[l + i]);
  }
  for (let j = 0; j < n2; j++) {
    R.push(arr[m + 1 + j]);
  }
  console.log(L, R);

  let i = 0;
  let j = 0;
  let k = l;
  //merge L and R
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  while (i < n1) {
    arr[k++] = L[i++];
  }

  while (j < n2) {
    arr[k++] = R[j++];
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    let mid = Math.floor((l + r) / 2);

    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
}

let arr = [7, 5, 3, 9];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
