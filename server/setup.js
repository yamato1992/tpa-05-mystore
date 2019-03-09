const api = require('./api-service');

const setup = function(app) {
  app.get('/api/items', (req, res) => {
    api.getItems()
      .then(data => res.json(data))
      .catch((err) => {
        res.status(400).json({ err: 'Error retrieving items data'})
      });
  });
};

module.exports = setup;
