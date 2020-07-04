const connection = require('../_shared/database/database');

class Controller {
  async all(customer_id, page) {
    return await connection('products')
    .where('customer_id', customer_id)
    .select('*');
  }
}

module.exports = new Controller();