function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements that are greater than current one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

module.exports = insertionSort;
