const express = require('express');

const routes = express.Router()
const customerController = require('./controllers/customer.controller');
const productController = require('./controllers/product.controller');
const customerProductController = require('./controllers/customer.product.controller')
const nullableEndpoint = require('./controllers/nullable.controller')


routes.get('/api/customer', customerController.all);
routes.post('/api/customer', customerController.save);
routes.get('/api/customer/:id', customerController.one);
routes.delete('/api/customer/:id', customerController.delete);

routes.get('/api/product', productController.all);
routes.post('/api/product', productController.save);
routes.get('/api/product/:id', productController.one);
routes.delete('/api/product/:id', productController.delete);

routes.get('/api/customer/:id/product', customerProductController.all);

routes.get('*', nullableEndpoint);




module.exports = routes;