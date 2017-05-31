function Node() {
  this.item = null;
  this.next = null;
}

function List() {
  this.head = new Node();
  this.length = 0;
}

List.prototype.addFirst = function(value) {
  var newNode = new Node();
  newNode.item = value;

  newNode.next = this.head.next;
  this.head.next = newNode;
  this.length++;
}

List.prototype.get = function(index) {
  var node = new Node();
  node = this.head;

  for(var i = 0; i < index; i++) {
    node = node.next;
  }

  return node.item;
}

List.prototype.addNode = function(index, value) {
  var newNode = new Node();
  newNode.item = value;

  var node = new Node();
  node = this.head;

  for(var i = 0; i < index-1; i++) {
    node = node.next;
  }

  newNode.next = node.next;
  node.next = newNode;
}

List.prototype.indexOf = function() {

}

var newList = new List();

for(var a = 0; a < 10; a++) {
  newList.addFirst(a);
}
for(var b = 0; b < 10; b++) {
  console.log(newList.get(b));
}

newList.addNode(1, 15);
