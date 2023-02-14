const fs = require( 'fs' );
const logger = require( "../utils/winstonLogger/winstonLogger" );

logger.log('info', 'FileSystem online' )

module.exports = class Container {
    constructor( file ) {
        this.file = file;
    }

    async save( product ) {
        try {
            if ( fs.existsSync( this.file ) ) {
                const products = await this.getAll();
                product.id = products.length + 1;
                products.push( product )
                await fs.promises.writeFile( this.file, JSON.stringify( products, null, 2 ) )
            } else {
                product.id = 0;
                await fs.promises.writeFile( this.file, JSON.stringify( [ product ], null, 2 ) )
            }
        } catch ( err ) {
            logger.info( 'error', `${ err }` )
            throw new Error( 'FileSystem error' )
        }
    }

    async getAll() {
        try {
            if ( fs.existsSync( this.file ) ) {
                const content = await fs.promises.readFile( this.file, "utf-8" )
                if ( content.length > 0 ) {
                    return JSON.parse( content )
                } else {
                    return []
                }
            } else {
                await fs.promises.writeFile( this.file, JSON.stringify( [], null, 2 ) )
            }
        } catch ( err ) {
            logger.info( 'error', `${ err }` )
            throw new Error( 'FileSystem error' )
        }

    }
}
