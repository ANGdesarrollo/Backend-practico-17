const dayjs = require('dayjs');
const { normalizedData } = require("../normalizr/normalizr");
const ChatDaosDB = require( "../daos/chatDaos/fileSystemChatDaos" );
const logger = require( "../utils/winstonLogger/winstonLogger" );

const dateNow = dayjs().format('YYYY/MM/DD hh:mm:ss')
const Container = new ChatDaosDB;

exports.sendMessages = async(data, io) => {
    try{
        const newMessage = {...data, timestamp: dateNow}
        await Container.save(newMessage);
        io.sockets.emit('newMessage', newMessage)
    }catch(err) {
        logger.info( 'error', `${ err }` )
    }
}

exports.getAllChats = async() => {
    try {
        const allChats = await Container.getAll();
        const normalizeData = normalizedData(allChats)
        return normalizeData
    }catch(err) {
        logger.info( 'error', `${ err }` )
    }
}
