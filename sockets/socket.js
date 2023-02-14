const corsConfig = require( "./corsConfig" );
const logger = require( "../utils/winstonLogger/winstonLogger" );
const getAllProducts = require( "../controllers/socketProducts" ).getAllProducts;
const saveProduct = require( "../controllers/socketProducts" ).saveProduct;
const getAllChats = require( "../controllers/socketChats" ).getAllChats;
const sendMessages = require( "../controllers/socketChats" ).sendMessages;

const io = ( Server, server, corsPolicy ) => {
    return new Server( server, { cors: corsConfig( corsPolicy ) },
        logger.log( 'info', 'Socket IO online' ) )
}

const sockets = ( io ) => {
    io.on( 'connection', async ( socket ) => {
        socket.on( 'productAdded', ( data ) => saveProduct( data, io ) );
        socket.on( 'dataMessage', async ( data ) => await sendMessages( data, io ) );
        socket.emit( 'allChats', await getAllChats() );
        socket.emit( 'allProducts', await getAllProducts() )
    } )
}

module.exports = {
    io,
    sockets
}




