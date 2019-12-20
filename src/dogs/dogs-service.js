/* eslint-disable indent */
'use strict';

const Queue = require('../queue/queue');
const petData = require('../petData');

let dogQ = '';

const DogsService = {
	// retrieves all dogs
	getAllDogs() {
		if (!dogQ) dogQ = new Queue();

		let queueSize = this.dogArray(dogQ).length;
		while (queueSize < 6) {
			this.addDog(dogQ);
			queueSize++;
		}
		let res = this.dogArray(dogQ);
		console.log(`${res[0].name}`);
		return res;
	},
	//adds a dog to the queue
	addDog(queue) {
		let ranDog = Math.ceil(7 * Math.random() - 1);
		let dog = petData.dogs[ranDog];
		queue.enqueue(dog);
	},
	//deletes dog from queue
	adoptDog(queue) {
		if (dogQ) {
			dogQ.dequeue();
		}
	},
	// will push dog into array
	dogArray(queue) {
		let dogArray = [];
		let curr = queue.first;
		while (curr !== null) {
			dogArray.push(curr.value);
			curr = curr.next;
		}
		return dogArray;
	}
};

module.exports = DogsService;
