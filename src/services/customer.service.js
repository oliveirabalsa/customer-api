const connection = require('../_shared/database/database');

class Controller {
  async all(page) {
    return await connection('customers')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');
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