const { getItems } = require('./controller');

const setup = function(app) {
  app.get('/api/items', getItems);
};

module.exports = setup;
