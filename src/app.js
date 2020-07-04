  
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const auth = require('./controllers/auth.controller')

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(auth)
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;