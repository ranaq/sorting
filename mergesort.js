function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let splitIdx = Math.ceil(wholeArray.length / 2);
  firstHalf = wholeArray.slice(0, splitIdx);
  secondHalf = wholeArray.slice(splitIdx);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let finalArray = [];
  while (arr2.length > 0 && arr1.length > 0) {
    if (arr1[0] < arr2[0]) {
      finalArray.push(arr1.shift());
    } else {
      finalArray.push(arr2.shift());
    }
  }
  if (arr2.length === 0) {
    finalArray = [...finalArray, ...arr1];
  } else {
    finalArray = [...finalArray, ...arr2];
  }
  return finalArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const [firstHalf, secondHalf] = split(array);
  console.log('array after first split');
  let sortedFH = mergeSort(firstHalf);
  let sortedSH = mergeSort(secondHalf);
  return merge(sortedFH, sortedSH);
}
