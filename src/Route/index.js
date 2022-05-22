const express = require('express');
const isAuthenticated  = require('../Middleware/auth.middleware');
const authRouter = require('./auth.route');
const todoRouter = require('./todo.route');

const app = express();

app.use('/auth', authRouter);
app.use('/todo', isAuthenticated, todoRouter);

module.exports = app;