const Container = require('../../container/fileSystemContainer');

module.exports = class ProductDaosDB extends Container {
    constructor() {
        super('./store/products.txt');
    }
}
