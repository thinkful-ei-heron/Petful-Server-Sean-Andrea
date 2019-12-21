/* eslint-disable indent */
'use strict';

const express = require('express');
const CatsService = require('./cats-service');

const catRouter = express.Router();

// catRouter.route('/allCats').get((req, res) => {
// 	const cats = CatsService.getAllCats();
// 	res.json(cats);
// });

// catRouter.route('/adopt-cat').delete((req, res) => {
// 	CatsService.adoptCat();
// 	res.status(204).end();
// });

catRouter
	.route('/allCats')
	.get((req, res) => {
		const cats = CatsService.getAllCats();
		if (!cats) {
			return res.status(400).json({ error: 'Sorry there are no cats available at this time' });
		}
		return res.json(cats);
	})
	.delete((req, res) => {
		const cats = CatsService.adoptCat();
		if (!cats) {
			console.log('testing');
			return res.status(400).json({ error: 'Sorry there are no cats available at this time' });
		}
		return res.json(cats);
	})
	.post((req, res) =>{
		//console.log(req)
	});

module.exports = catRouter;
