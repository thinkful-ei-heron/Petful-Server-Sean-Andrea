/* eslint-disable indent */
'use strict';

class _Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	enqueue(data) {
		const node = new _Node(data);
		if (this.first === null) this.first = node;
		if (this.last) this.last.next = node;
		this.last = node;
	}
	dequeue() {
		if (this.first === null) return;
		const node = this.first;
		this.first = this.first.next;
		if (node === this.last) {
			this.last = null;
		}
		return node.value;
	}
	size() {
		let currNode = this.first;
		let counter = 0;
		while (currNode !== null) {
			currNode = currNode.next;
			counter++;
		}
		return counter;
	}
}

let catQ = new Queue();
let dogQ = new Queue();

module.exports = { Queue, catQ, dogQ }
//module.exports = Queue;
