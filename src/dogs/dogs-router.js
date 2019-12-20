/* eslint-disable indent */
'use strict';

const express = require('express');
const DogsService = require('./dogs-service');

const dogRouter = express.Router();

dogRouter.route('/allDogs').get((req, res) => {
	const dogs = DogsService.getAllDogs();
	res.json(dogs);
});

dogRouter.route('/adopt-dog').delete((req, res) => {
	DogsService.adoptDog();
	res.status(204).end();
});

module.exports = dogRouter;
