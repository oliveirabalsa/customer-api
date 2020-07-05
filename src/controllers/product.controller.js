const productService = require('../services/product.service');
const { onSuccess, onCreated, onDeleted, onError, onNotFound, onUnathorized } = require('../_shared/handlers/response/index');

class Controller {
  async all(req, res) {
    try {
      const { page = 1 } = req.query;
      const products = await productService.all(page)

      if (!products.length) {
        return onNotFound(res, { message: 'Products not found' })
      }

      return onSuccess(res, products);
    } catch (error) {
      return onError(res, { message: 'Error during get all products', error: error.message });
    }
  }

  async save(req, res) {
    try {
      const product = req.body;
      const requiredFields = ['price', 'image', 'brand', 'title', 'reviewScore']
      const checkProduct = await productService.all()

      const productAlreadyCrated = checkProduct.find((item) => {
        if (item.name === product.name) {
          return item;
        }
      });

      const checkFields = requiredFields.filter((response) => {
        if (!product.hasOwnProperty(response)) {
          return response;
        }
      });

      if (checkFields.length) {
        return onError(res, { message: `Missing fields: ${checkFields.join(', ')}` });

      }

      if (productAlreadyCrated) {
        return onError(res, { message: 'Product with this name already exists' })
      }
      await productService.save(product);
      const productCreated = await productService.all()

      return onCreated(res, { message: 'Product successfully created', data: productCreated[productCreated.length - 1] });

    } catch (error) {
      return onError(res, { message: 'Error during create product', error: error.message });
    }
  }

  async one(req, res) {
    try {
      const { id } = req.params;
      const products = await productService.one(id);

      if (!products || products && !products.length) {
        return onNotFound(res, { message: "Product not found" })
      }

      return onSuccess(res, products);
    } catch (error) {
      return onError(res, { message: 'Error during get a product', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await productService.delete(id);

      return onDeleted(res);
    } catch (error) {
      return onError(res, { message: 'Error during delete a product', error: error.message });
    }
  }

}
module.exports = new Controller()