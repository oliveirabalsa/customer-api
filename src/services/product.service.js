const connection = require('../_shared/database/database');

class Controller {
  async all(page) {
    return await connection('products')
    .limit(5)
    .offset((page - 1) * 5)
    .select('*');
  }

  async save(payload) {
    return await connection('products').insert(payload);
  }

  async one(id) {
    return await connection('products').select('*').where('id', id);

  }

  async delete(id) {
    return await connection('products').where('id', id).delete();
  }
}

module.exports = new Controller();