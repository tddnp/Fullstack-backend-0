require('dotenv').config()
const { default: mongoose } = require('mongoose')
const mysql = require('mysql2/promise')

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })

const connection = async () => {
    const options = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
    }
    await mongoose.connect(process.env.DB_HOST, options)
}

module.exports = connection