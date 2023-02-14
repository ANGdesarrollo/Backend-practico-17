const express = require( 'express' );
const getInfo = require( "../controllers/info" );
const compression = require( "compression" );
const Router = express.Router;
const routerInfo = Router();

routerInfo.get( '/', getInfo );
routerInfo.get( '/gzip', compression(), getInfo )

module.exports = routerInfo
