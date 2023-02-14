const express = require('express');
const Router = express.Router;
const fakerProducts = require("../controllers/faker.js").fakerProducts;
const routerFaker = Router();

routerFaker.get('/', fakerProducts);

module.exports = routerFaker

