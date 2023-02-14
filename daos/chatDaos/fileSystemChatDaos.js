const Container = require('../../container/fileSystemContainer');

module.exports = class ChatDaosDB extends Container {
    constructor() {
        super('./store/chat.txt');
    }
}
