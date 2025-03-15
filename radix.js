// Returns the digit at the given place in a number
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Returns the number of digits in a given number
function digitCount(num) {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Returns the maximum number of digits in an array of numbers
function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// Radix Sort implementation
function radixSort(arr) {
  if (arr.length === 0) return arr;

  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      let digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }

    // Flatten the array back from the buckets
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
