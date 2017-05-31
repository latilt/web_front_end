function Node(value) {
  this.element = value;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.addFirst = function(value) {
  var curr = new Node(value);

  curr.next = this.head;
  this.head.prev = curr;
  this.head = curr;
  this.length++;
}

DoublyLinkedList.prototype.addLast = function(value) {
  
}
