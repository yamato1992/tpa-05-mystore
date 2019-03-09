const db = require('./db/connection');

const getItems = async() => {
    const dbConnection = await db.getConnection();
    const [rows] = await dbConnection.query('select * from items');
    return rows;
};

module.exports = {
    getItems,
    setItem,
}