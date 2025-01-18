const connection = require('../config/dataBase')

const getAllUser = async (req, res) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`)
    return results
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [id])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, id]
    )
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [id]
    )
}

module.exports = { getAllUser, getUserById, updateUser, deleteUser }