/* eslint-disable no-console */
/* eslint-disable indent */
'use strict';

const { Queue } = require('../queue/queue');
const { dogQ } = require('../queue/queue');
const petData = require('../petData');

const DogsService = {
	// retrieves all dogs

	getAllDogs() {
		let tempArray = []
		let queueSize = dogQ.size();
		if(queueSize < 7){
		while (queueSize < 7) {
			 this.addDog(dogQ, tempArray);
			 queueSize++;
		 }
		}
		let res = this.dogArray(dogQ);
		console.log(`Next to be adopted is ${res[0].name}`);
		return res;
	},
	//adds a dog to the queue
	addDog(dogQ, tempArray) {
		let ranDog = Math.ceil(7 * Math.random()-1);
		let dog;
		if (tempArray.indexOf(ranDog) === -1) {
			if (tempArray.length < petData.dogs.length) {
				tempArray.push(ranDog);
				dog = petData.dogs[ranDog];
				dogQ.enqueue(dog);
				console.log(tempArray);
			}
		} else {
			this.addDog(dogQ, tempArray);
		}
	},
	//deletes dog from queue
	adoptDog() {
		if (dogQ) {
			dogQ.enqueue(dogQ.dequeue());
		}
		return 'dog was adopted';
	},
	// will push dog into array
	dogArray(dogQ) {
		let dogArr = [];
		let curr = dogQ.first;
		while (curr !== null) {
			dogArr.push(curr.value);
			curr = curr.next;
		}
		return dogArr;
	},
};

module.exports = DogsService;
