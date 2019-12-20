/* eslint-disable indent */
'use strict';
require('dotenv').config();
const { PORT, CLIENT_ORIGIN } = require('./config');
const express = require('express');
const cors = require('cors');
const catRouter = require('./cats/cats-router');
const dogRouter = require('./dogs/dogs-router');
const app = express();

app.use(cors());
app.use(
	cors({
		origin: CLIENT_ORIGIN
	})
);

app.use('/api/cats', catRouter);
app.use('/api/dogs', dogRouter);

// Catch-all 404
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: app.get('env') === 'development' ? err : {}
	});
});

app.listen(PORT, () => {
	console.log('Serving on 8080');
});
