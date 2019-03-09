const db = require('./db/connection');

const getItems = async() => {
  const dbConnection = await db.getConnection();
  const [rows] = await dbConnection.query('SELECT * FROM `items`');
  return rows;
};

const createItem = async(name, price, imageUrl) => {
  const dbConnection = await db.getConnection();
  const [result] = await dbConnection.query('INSERT INTO `items` (`name`, `price`, `imageUrl`) VALUES (?, ?, ?)', [name, price, imageUrl]);
  return result;
};

module.exports = {
  getItems,
  createItem,
};