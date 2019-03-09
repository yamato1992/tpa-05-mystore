const db = require('./db/connection');

const getItems = async(req, res) => {
    const dbConnection = await db.getConnection();
    const [rows] = await dbConnection.query('select * from items');
    return res.json(rows);
};

module.exports = {
    getItems,
}