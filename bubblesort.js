function bubbleSort(array) {
  let madeSwaps = true;
  while (madeSwaps) {
    madeSwaps = false;

    for (let i = 0; i < array.length - 1; i++) {
      let j = i + 1;
      let el1 = array[i];
      let el2 = array[j];
      if (el1 > el2) {
        array = swap(i, j, array);
        madeSwaps = true;
      }
    }
  }
  return array;
}

function swap(a, b, array) {
  const tempA = array[a];
  array[a] = array[b];
  array[b] = tempA;

  return array;
}

// function bubbleSort(array, comparator) {
//   let madeSwaps = true;
//   while (madeSwaps) {
//     madeSwaps = false;

//     for (let i = 0; i < array.length - 1; i++) {
//       let j = i + 1;
//       let el1 = array[i];
//       let el2 = array[j];
//       if (comparator(el1, el2) > 0) {
//         swap(i, j, array);
//         madeSwaps = true;
//       }
//     }
//   }
//   return array;
// }

// function swap(a, b, array) {
//   const tempA = array[a];
//   array[a] = array[b];
//   array[b] = tempA;

//   return array;
// }

// function comparator(a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
