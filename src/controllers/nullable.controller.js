class Nullable {
  async nullable(req, res) {
    return res.json({message: 'Please, insert an endpoint.'})
  }
}
module.exports = new Nullable().nullable;