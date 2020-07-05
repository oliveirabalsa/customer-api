const customerProductService = require('../services/customer.product.service');
const { onSuccess, onError, onNotFound, onUnathorized } = require('../_shared/handlers/response/index');

class Controller {
  async all(req, res) {
    try {
      const { page = 1 } = req.query;
      const customer_id = req.params.id;

      const customers = await customerProductService.all(customer_id, page);

      if (!customers.length) {
        return onNotFound(res, { message: 'Products of these customer not found' })
      }

      return onSuccess(res, customers);
    } catch (error) {
      return onError(res, { message: 'Error during get customer products', error: error.message });
    }
  }
}
module.exports = new Controller()