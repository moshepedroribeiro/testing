const express = require('express');
const route = express.Router();

route.get('/', (request, response) => {
    return response.json({
        nome: "teste",
        idade: 20
    });
});

module.exports = route;