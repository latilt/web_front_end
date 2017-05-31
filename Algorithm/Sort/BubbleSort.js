function swap(arr, left, right) {
    var temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
}



function bubbleSort(myarr) {
  var loop, count = myarr.length;
  for(loop = 0; loop <  count - 1; loop++) {
    for(var i = 0; i < count - 1 - loop; i++) {
      if(myarr[i] > myarr[i+1]) {
        swap(myarr, i, i+1);
      }
    }
  }
};

function bubbleSort2(myarr) {
  var loop;
  for(loop = myarr.length; loop >=0; loop--) {
    for(var i = 0; i < loop-1; i++) {
      if(myarr[i] > myarr[i+1]) {
        swap(myarr, i, i+1);
      }
    }
  }
};

var myArray = [5, 3, 9, 13, 1, 7, 10, 2];

console.log(myArray);
bubbleSort2(myArray);
console.log(myArray);
