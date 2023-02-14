const dayjs = require("dayjs");
const ProductDaosDB = require( "../daos/productsDaos/fileSystemProductDaos" );
const logger = require( "../utils/winstonLogger/winstonLogger" );

const Container = new ProductDaosDB;
const dateNow = dayjs().format('YYYY/MM/DD hh:mm:ss')

exports.saveProduct = async(data, io) => {
   try{
       if(data.product && data.price && data.thumbnail) {
           const product = {...data, timestamp: dateNow};
           await Container.save(product);
           io.sockets.emit('productAdded', data)
       }
   }catch(err) {
       logger.info( 'error', `${ err }` )
   }
};

exports.getAllProducts = async(data) => {
    try{
        return await Container.getAll();
    }catch(err) {
        logger.info( 'error', `${ err }` )
    }
}


