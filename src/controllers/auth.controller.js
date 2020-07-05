const { onUnathorized } = require('../_shared/handlers/response/index');

class Auth {
  async auth(req, res, next) {
      let Authorization = req.headers.authorization;

      if(!Authorization){
        return onUnathorized(res, {message: 'Please insert the authorization'})
      }
      
      if(!Authorization.includes('Basic ')){
        return onUnathorized(res, {message: 'Please insert the authorization on the header e.g Basic ...'})
      }

      Authorization = Authorization.replace('Basic ', '')

      if(Authorization != 'ZXNwZXJvcGFzc2FybmVzdGV0ZXN0ZTptZWNvbnRyYXRlbQ=='){
        return onUnathorized(res, {message: 'Authorization invalid'})
      }
      next()
  }
}
module.exports = new Auth().auth;