/* 
Add nodes to singly linked list. 
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this.head = null;
    this.len = 0;
}


List.prototype.add = function(val) {
    let node = new Node(val);
    let current = this.head;

    if (current == null) {
	this.head = node;
	this.len++;

	return node;
    }

    while (current.next != null) {
	current = current.next;
    }

    current.next = node;
    this.len++

    return node;
}