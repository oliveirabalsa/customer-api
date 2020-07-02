const connection = require('../_shared/database');

class Controller {
  async all() {
    return await connection('customers').select('*');
  }

  async save(payload) {
    return await connection('customers').insert(payload);
  }

  async one(id) {
    return await connection('customers').select('*').where('id', id);
  }

  async delete(id) {
    return await connection('customers').where('id', id).delete();
  }
}

module.exports = new Controller();