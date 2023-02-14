const logger = require( "../utils/winstonLogger/winstonLogger" );
const calculateRandoms = ( req, res ) => {
    try {
        const qty = req.body.param || 100000000
        const numbers = {}
        for( let i = 0; i < qty; i++ ) {
            const tempNum = Math.floor( Math.random() * 20 )
            numbers[ tempNum ] = numbers[ tempNum ] ? numbers[ tempNum ] + 1 : 1
        }
        res.json({
            numbers
        })


    } catch( err ) {
        logger.info('error', `${err}`)
    }
}

module.exports = calculateRandoms;





