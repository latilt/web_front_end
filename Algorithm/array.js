class MyArray {
	constructor() {
		this.arr = [];
	}

	get(index) {
		return this.arr[index];
	}

	insert(index, value) {
		if(typeof this.arr[index] !== 'undefined') {
			for(var i = this.arr.length; i >= index; i--) {
				this.arr[i] = this.arr[i-1];
			}
		}
		this.arr[index] = value;
	}

	delete(index) {
		for(var i = index, j = this.arr.length; i < j; i++) {
			this.arr[i] = this.arr[i+1];
		}
		this.arr.pop();
	}

	printAll() {
    for(var i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
	}

	get length() {
    var count = 0;
    var flag = 0;
    while(typeof flag !== 'undefined') {
      flag = this.arr[count];
      count++;
    }
    return count-1;
	}

	//search value and return index of the value
	search(value) {
    var min = 0;
    var max = this.arr.length;
    var middle = -1;

    while(min < max) {
      middle = Math.floor((min+max)/2);

      if(this.arr[middle] === value) {
        return middle;
      } else if(this.arr[middle] < value) {
        min = middle+1;
      } else if(this.arr[middle] > value) {
        max = middle-1;
      }
    }

    return -1;
	}
}

/*****************
 * test code
 * ignore below
 *****************/
var testcount = 0;
var success = 0;
var assert = function(condition, msg) {
	testcount++;
	if(!condition) {
		console.log(msg + " test fail.");
	}
	else
		success++;
}

var testResult = function() {
	console.log(success + "/" + testcount + " test passed.");
}

var a = new MyArray();
for (let i = 0; i < 10; i++) {
	a.insert(i, i);
}

a.printAll();

assert(a.length === 10, "Array size");
assert(a.search(6) === 6, "Search");

for (let i = 8; i >=0; i-=2) {
	a.delete(i);
}

a.printAll();
assert(a.length === 5, "Delete");
assert(a.search(6) === -1, "Not found");
testResult();
