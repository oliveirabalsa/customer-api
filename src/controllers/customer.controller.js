const customerService = require('../services/customer.service');
const { onSuccess, onCreated, onDeleted, onError, onUnathorized } = require('../_shared/handlers/index');

class Controller {
  async all(req, res) {
    try {
      const customers = await customerService.all()

      onSuccess(res, customers);
    } catch (error) {
      onError(res, {message: 'Error during get all customers', error: error.message});
    }
  }

  async save(req, res) {
    try {
      const customer = req.body;
    
      await customerService.save(customer);
      const customerCreated = await customerService.all();

      onCreated(res, {data: customerCreated [customerCreated.length - 1]});
    } catch (error) {
      onError(res,  {message: 'Error during get all customers', error: error.message});
    }
  }

  async one(req, res) {
    try {
      const { id } = req.params;
      const customers = await customerService.one(id);

      onSuccess(res, customers);
    } catch (error) {
      onError(res, {message: 'Error during get all customers', error: error.message});
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await customerService.delete(id);

      onDeleted(res);
    } catch (error) {
      onError(res, {message: 'Error during get all customers', error: error.message});
    }
  }

}
module.exports = new Controller()