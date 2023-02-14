const express = require('express');
const calculateRandoms = require( "../controllers/randoms" );
const Router = express.Router;
const routerRandoms = Router();

routerRandoms.post('/', calculateRandoms)

module.exports =  routerRandoms
