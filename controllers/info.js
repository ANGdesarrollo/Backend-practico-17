const os = require("os");
const logger = require( "../utils/winstonLogger/winstonLogger" );

const cpuLength = () => os.cpus().length;

const getInfo = (req, res) => {
    try{
        const data = {
            args: process.argv,
            opSystem: process.platform,
            nodeVersion: process.version,
            rss: process.memoryUsage().rss,
            path: process.cwd(),
            processID: process.pid,
            cpus: cpuLength()
        }

        logger.info('info', 'Data sent')

        res.json({
            status: true,
            data
        })

    } catch(err){
        logger.info( 'error', `${ err }` )
    }
}

module.exports = getInfo;

