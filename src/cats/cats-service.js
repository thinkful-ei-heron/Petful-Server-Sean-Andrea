/* eslint-disable no-console */
/* eslint-disable indent */
'use strict';

const Queue = require('../queue/queue');
const petData = require('../petData');
let tempArray = [];

let catQ = '';

const CatsService = {
	// retrieves all cats
	getAllCats() {
		if (!catQ) catQ = new Queue();

		let queueSize = this.catArray(catQ).length;
		while (queueSize < 4) {
			this.addCat(catQ);
			queueSize++;
		}
		let res = this.catArray(catQ);
		console.log(`Next to be adopted is ${res[0].name}`);
		return res;
	},
	//adds a cat to the queue
	addCat(catQ) {
		let ranCat = Math.ceil(7 * Math.random() - 1);
		let cat;
		if (tempArray.indexOf(ranCat) === -1) {
			if (tempArray.length < petData.cats.length) {
				tempArray.push(ranCat);
				cat = petData.cats[ranCat];
				catQ.enqueue(cat);
				console.log(tempArray);
			}
		} else {
			this.addCat(catQ);
		}
	},
	//deletes cat from queue
	adoptCat() {
		if (catQ) {
			catQ.dequeue();
		}
		return 'cat was adopted';
	},
	// will push cat into array
	catArray(catQ) {
		let catArray = [];
		let curr = catQ.first;
		while (curr !== null) {
			catArray.push(curr.value);
			curr = curr.next;
		}
		return catArray;
	}
};

module.exports = CatsService;
