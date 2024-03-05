// pembuatan file models biasakan dengan nama tabel
// contoh : users.js

const dbPool = require("../config/database");

const query = 'SELECT * FROM users';

const getAllUser = () => {
    return dbPool.execute(query);
}

module.exports = {
    getAllUser,
}