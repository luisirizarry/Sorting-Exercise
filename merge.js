function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  // Merge the two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from both arrays
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: a single element is already sorted

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
