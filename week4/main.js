document.addEventListener("DOMContentLoaded", function() {
  randomName.init();
  addressBook.init();
});

var randomName = {

  first : ['김', '이', '박', '정', '최', '조', '강', '윤', '장', '임'],
  middle : ['성', '영', '상', '재', '종', '정', '동', '용', '승', '경'],
  last : ['호', '수', '석', '철', '훈', '현', '진', '영', '환', '식'],

  createName2 : function(evt) {
    var firstNumber = Math.floor(Math.random() * 10);
    var middleNumber = Math.floor(Math.random() * 10);
    var lastNumber = Math.floor(Math.random() * 10);

    var result = this.first[firstNumber] + this.middle[middleNumber] + this.last[lastNumber];

    var view = document.querySelector(".view");
    view.innerHTML = result;
  },

  createName : function(evt) {
    var randomNumber = [];

    for(var i = 0; i < 3; i++) {
      randomNumber[i] = String.fromCharCode(Math.floor(Math.random() * 10172 + 44032));
    }

    var name = randomNumber.join("");

    var view = document.querySelector(".view");
    view.innerHTML = name;
  },

  init : function() {
    var createName = document.querySelector("#random");
    //createName.addEventListener("click", this.createName);
    createName.addEventListener("click", this.createName2.bind(randomName));
  }
};

var addressBook = {
  data : [{name : "김철수", address : "성남"},
          {name : "김철순", address : "안양"},
          {name : "김철순", address : "사하라"},
          {name : "김하영", address : "부산"},
          {name : "김하영", address : "평양"}],

  initialize : function() {

    var length = this.data.length
    for(var i = 0; i < length; i++) {
      this.data.pop();
    }
  },

  store : function(name, address) {
    var obj = {name : null,
               address : null};

    obj.name = name;
    obj.address = address;

    /*var count = this.data.length;
    for(var i = 0; i < this.data.length; i++) {
      if(this.data[i].name > name) {
        count = i;
        break;
      }
    }

    this.data.splice(count, 0, obj);*/

    this.data.push(obj);
    this.data.sort(function(a, b) {
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }
      return 0;
      });
  },

  searchByName : function(name) {
    var find = this.binarySearch(0, this.data.length-1, name);
    var view = document.querySelector(".addressView");

    if(find === -1) {
      view.innerHTML = "없습니다";
      return;
    }
    var result = [];
    result.push(this.data[find].address);
    this.prevSearch(find, name, result);
    this.nextSearch(find, name, result);

    view.innerHTML = result.join("<br>");
    //view.innerHTML = result.join("\n");
  },

  prevSearch : function(number, name, result) {
    if(number-1 < 0) return;
    if(this.data[number-1].name === name) {
      result.push(this.data[number-1].address);
      return this.prevSearch(number-1, name, result);
    }
    else {
      return;
    }
  },

  nextSearch : function(number, name, result) {
    if(number+1 > this.data.length-1) return;
    if(this.data[number+1].name === name) {
      result.push(this.data[number+1].address);
      return this.nextSearch(number+1, name, result);
    }
    else {
      return;
    }
  },

  binarySearch : function(min, max, name) {
    if(max < min) {
      return -1;
    }
    var middle = Math.floor((max + min) / 2);

    if(this.data[middle].name < name) {
      return this.binarySearch(middle+1, max, name);
    }
    else if(this.data[middle].name > name) {
      return this.binarySearch(min, middle-1, name);
    }
    else {
      return middle;
    }
  },

  click : function(evt) {
    var node = evt.target;
    var id = node.id;

    if (id === "init") {
      this.initialize();
    }

    else if (id === "store") {
      var name = node.previousElementSibling.previousElementSibling.value;
      var address = node.previousElementSibling.value;
      this.store(name, address);
    }

    else if (id === "search") {
      var name = node.previousElementSibling.value;
      this.searchByName(name);
    }
  },

  init : function() {
    var btn = document.querySelector("#addressBook");
    btn.addEventListener("click", this.click.bind(addressBook));
  }
};
