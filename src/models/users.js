// pembuatan file models biasakan dengan nama tabel
// contoh : users.js

const dbPool = require("../config/database");


const getAllUser = () => {
    const query = 'SELECT * FROM users';
    return dbPool.execute(query);
}

const createNewUser = (body) => {
    const query = `INSERT INTO users (name, email, address) VALUES 
                   ('${body.name}', '${body.email}', '${body.address}')`;
    return dbPool.execute(query);
}

const updateExUser = (body, idUser) => {
    const query = `UPDATE users 
                   SET name='${body.name}', email='${body.email}', address='${body.address}' 
                   where id= ${idUser}`
    return dbPool.execute(query);
}

const deleteExUser = (idUser) => {
    const query = `DELETE FROM users where id= ${idUser}`
    return dbPool.execute(query);
}

module.exports = {
    getAllUser,
    createNewUser,
    updateExUser,
    deleteExUser,
}