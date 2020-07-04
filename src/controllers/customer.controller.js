const customerService = require('../services/customer.service');
const { onSuccess, onCreated, onDeleted, onError, onNotFound, onUnathorized } = require('../_shared/handlers/response/index');

class Controller {
  async all(req, res) {
    try {
      const { page = 1 } = req.query;

      const customers = await customerService.all(page)
      if(!customers.length) {
        onNotFound(res, {message: 'Customers not found'})
      }

      return onSuccess(res, customers);
    } catch (error) {
      return onError(res, { message: 'Error during get all customers', error: error.message });
    }
  }

  async save(req, res) {
    try {
      const customer = req.body;
      const requiredFields = ['name', 'email']
      const checkCustomer = await customerService.all()

      const customerAlreadyCrated = checkCustomer.find((person) => {
        if (person.email === customer.email) {
          return person;
        }
      });

      const checkFields = requiredFields.filter((response) => {
        if(!customer.hasOwnProperty(response)){
          return response;
        }
      });
      console.log(checkFields)

      if(checkFields.length) {
        return onError(res, { message: `Missing fields: ${checkFields.join(', ')}` });
      }

      if (customerAlreadyCrated) {
        return onError(res, { message: 'Customer already exists' })
      }
      await customerService.save(customer);
      const customerCreated = await customerService.all()

      return onCreated(res, { message: 'Customer successfully created', data: customerCreated[customerCreated.length - 1] });

    } catch (error) {
      return onError(res, { message: 'Error during create a customer', error: error.message });
    }
  }

  async one(req, res) {
    try {
      const { id } = req.params;
      const customers = await customerService.one(id);

      if (!customers || customers && !customers.length) {
        return onNotFound(res, { message: "Customer not found" })
      }

      return onSuccess(res, customers);
    } catch (error) {
      return onError(res, { message: 'Error during get a customer', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await customerService.delete(id);

      return onDeleted(res);
    } catch (error) {
      return onError(res, { message: 'Error during delete a customer', error: error.message });
    }
  }

}
module.exports = new Controller()