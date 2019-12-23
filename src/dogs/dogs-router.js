/* eslint-disable indent */
'use strict';

const express = require('express');
const DogsService = require('./dogs-service');

const dogRouter = express.Router();

// dogRouter.route('/allDogs').get((req, res) => {
// 	const dogs = DogsService.getAllDogs();
// 	res.json(dogs);
// });

// dogRouter.route('/adopt-dog').delete((req, res) => {
// 	DogsService.adoptDog();
// 	res.status(204).end();
// });

dogRouter
	.route('/allDogs')
	.get((req, res) => {
		const dogs = DogsService.getAllDogs();
		if (!dogs) {
			return res.status(400).json({ error: 'Sorry there are no dogs available at this time' });
		}
		return res.json(dogs);
	})
	.delete((req, res) => {
		const dogs = DogsService.adoptDog();
		if (!dogs) {
			return res.status(400).json({ error: 'Sorry there are no dogs available at this time' });
		}
		return res.json(dogs);
	});

module.exports = dogRouter;
