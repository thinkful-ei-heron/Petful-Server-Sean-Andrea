/* eslint-disable indent */
'use strict';
const Queue = require('../queue/queue');
const cuid = require('cuid');

let userQ = '';

const UsersService = {
	getAllUsers() {
		if (!userQ) {
			return [];
		}
		return this.queueToArr(userQ);
	},
	//add a new user
	addUser(fullName) {
		if (!userQ) {
			userQ = new Queue();
		}
		const userId = cuid();
		const user = { id: userId, name: fullName };
		userQ.enqueue(user);
		return userId;
	},
	//remove person from queue
	deletePerson() {
		if (userQ) {
			userQ.dequeue();
		}
	},
	queueToArr(queue) {
		let people = [];
		let currUser = queue.first;
		while (currUser !== null) {
			people.push(currUser.value);
			currUser = currUser.next;
		}
		return people;
	}
};

module.exports = UsersService;
