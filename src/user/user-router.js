/* eslint-disable indent */
'use strict';
const express = require('express');
const jsonBodyParser = express.json();
const UsersService = require('../user/user-service');

const userRouter = express.Router();

userRouter
	.route('/')
	.get((re, res) => {
		const users = UsersService.getAllUsers();
		res.json(users);
	})
	.post(jsonBodyParser, (req, res) => {
		const userName = req.body.name;
		const userId = UsersService.addUser(userName);
		res.json(userId).status(201);
	})
	.delete((req, res) => {
		UsersService.deletePerson();
		res.status(204).end();
	});

module.exports = userRouter;
