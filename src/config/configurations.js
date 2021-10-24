require('dotenv').config();

const configurations = {
    server: {
        PORT: process.env.PORT,
        serviceURL: process.env.serviceURL
    }
}

module.exports = configurations;