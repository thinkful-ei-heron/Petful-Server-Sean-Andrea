/* eslint-disable indent */
'use strict';
const Queue = require('../queue/queue');
const cuid = require('cuid');

let UserQ = '';

const UserService = {
	getAllUsers() {
		if (!UserQ) {
			return [];
		} else {
			return this.queueToArray(UserQ);
		}
	},
	//add a user to the queue
	addUser(userName) {
		if (!UserQ) {
			UserQ = new Queue();
		}
		const userId = cuid();
		const user = { id: userId, name: userName };
		UserQ.enqueue(user);
		return userId;
	},

	//remove user from the queue
	removeUser() {
		if (UserQ) {
			UserQ.dequeue();
		}
	},

	//turn queue to an array
	queueToArray(queue) {
		let users = [];
		let currUser = queue.first;
		while (currUser !== null) {
			users.push(currUser.value);
			currUser = currUser.next;
		}
		return users;
	}
};

module.exports = UserService;
