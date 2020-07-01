const express = require('express')
const connection = require('./src/_shared/database')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

  app.get('/', async(req, res) => {
      const users = await connection('customers').select('*');
      
      return res.send(users);
  });

app.listen(PORT, HOST)