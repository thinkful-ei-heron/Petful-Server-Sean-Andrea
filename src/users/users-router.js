/* eslint-disable indent */
'use strict';

const express = require('express');
const jsonBodyParser = express.json();
const UserService = require('./users-service');

const userRouter = express.Router();

userRouter
	.route('/')
	.get((req, res) => {
		const userArr = UserService.getAllUsers();
		res.json(userArr);
	})
	.post(jsonBodyParser, (req, res) => {
		const name = req.body.name;
		const userId = UserService.addUser(name);
		res.json(userId).status(201);
	})
	.delete((req, res) => {
		UserService.removeUser();
		res.status(204).end();
	});

module.exports = userRouter;
