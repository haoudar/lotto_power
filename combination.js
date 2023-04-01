/*
Create all possible combinations of n numbers from an Array arr.
*/
function combinations(n, arr) {
  if (n === 0) {
    return [[]];
  }
  if (arr.length === 0) {
    return [];
  }
  let result = [];
  const head = arr[0];
  const tail = arr.slice(1);
  const withoutHead = combinations(n, tail);
  for (let i = 0; i < withoutHead.length; i++) {
    result.push([head, ...withoutHead[i]]);
  }
  result.push(...combinations(n - 1, tail).map(combination => [head, ...combination]));
  return result;
}

function arraysEqualWithTolerance(arr1, arr2, diff) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      count++;
      if (count > diff) {
        return false;
      }
    }
  }
  return true;
}

function minimizeArray(A, diff) {
  let B = [...A];
  for (let i = 0; i < B.length; i++) {
    for (let j = i + 1; j < B.length; j++) {
      if (arraysEqualWithTolerance(B[i], B[j], diff)) {
        B.splice(j, 1);
        j--;
      }
    }
  }
  return B;
}
