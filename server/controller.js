const db = require('./db/connection');

const getItems = async() => {
  const dbConnection = await db.getConnection();
  const [rows] = await dbConnection.query('SELECT * FROM `items`');
  return rows;
};

const setItem = async(name, price, imageUrl) => {
  const dbConnection = await db.getConnection();
  return await dbConnection.query('INSERT INTO `items` (`name`, `price`, `image_url`) VALUES (?, ?, ?)', [name, price, imageUrl]);
};

module.exports = {
  getItems,
  setItem,
};