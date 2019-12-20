/* eslint-disable indent */
'use strict';

const Queue = require('../queue/queue');
const petData = require('../petData');

let catQ = '';

const CatsService = {
	// retrieves all cats
	getAllCats() {
		if (!catQ) catQ = new Queue();

		let queueSize = this.catArray(catQ).length;
		while (queueSize < 6) {
			this.addCat(catQ);
			queueSize++;
		}
		let res = this.catArray(catQ);
		console.log(`${res[0].name}`);
		return res;
	},
	//adds a cat to the queue
	addCat(queue) {
		let ranCat = Math.ceil(7 * Math.random() - 1);
		let cat = petData.cats[ranCat];
		queue.enqueue(cat);
	},
	//deletes cat from queue
	adoptCat(queue) {
		if (catQ) {
			catQ.dequeue();
		}
	},
	// will push cat into array
	catArray(queue) {
		let catArray = [];
		let curr = queue.first;
		while (curr !== null) {
			catArray.push(curr.value);
			curr = curr.next;
		}
		return catArray;
	}
};

module.exports = CatsService;
