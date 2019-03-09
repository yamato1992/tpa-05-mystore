const api = require('./api-service');

const setup = function(app) {
  app.get('/api/items', (req, res) => {
    api.getItems()
      .then(data => res.json(data))
      .catch((err) => {
        res.status(400).json({ err: 'Error retrieving items data'});
      });
  });

  app.post('/api/items', (req, res) => {
    const { name, price, imageUrl } = req.query;
    api.setItem(name, price, imageUrl)
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => {
        res.status(400).json({ err: 'Error posting item data'});
      });
  });
};

module.exports = setup;
