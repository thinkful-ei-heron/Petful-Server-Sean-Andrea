/* eslint-disable indent */
'use strict';

const express = require('express');
const CatsService = require('./cats-service');

const catRouter = express.Router();

catRouter.route('/allCats').get((req, res) => {
	const cats = CatsService.getAllCats();
	res.json(cats);
});

catRouter.route('/adopt-cat').delete((req, res) => {
	CatsService.adoptCat();
	res.status(204).end();
});

module.exports = catRouter;
