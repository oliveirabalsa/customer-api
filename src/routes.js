const express = require('express');

const routes = express.Router()
const customerController = require('./controllers/customer.controller');

routes.get('/customers', customerController.all);
routes.post('/customers', customerController.save);
routes.get('/customers/:id', customerController.one);
routes.delete('/customers/:id', customerController.delete);

module.exports = routes;