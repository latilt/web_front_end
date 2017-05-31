function swap(arr, left, right) {
    var temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
}

function partition(arr, left, right, pivot) {
  var pivotValue = arr[pivot];
  swap(arr, right, pivot);
  var storeIndex = left;
  for(var i = left; i < right - 1; i++) {
    if(arr[i] <= pivotValue) {
      swap(arr, storeIndex, i);
      storeIndex = storeIndex + 1;
    }
  }
  swap(arr, right, storeIndex);
  return storeIndex;
}

function quickSort(arr, left, right) {
  if(left < right) {
    //var pivot = Math.floor((left+right)/2);
    var storeIndex = partition(arr, left, right, left);
    quickSort(arr, left, storeIndex-1);
    quickSort(arr, storeIndex+1, right);
  }
}

var myArray = [5, 3, 9, 13, 1, 7, 10, 2];

console.log(myArray);
quickSort(myArray, 0, myArray.length-1);
console.log(myArray);
