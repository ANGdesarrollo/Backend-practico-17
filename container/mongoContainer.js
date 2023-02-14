const logger = require( "../utils/winstonLogger/winstonLogger" );

module.exports = class ContainerMongo {
    constructor(collection) {
        this.collection = collection
    }

    async getAll() {
        try {
            return await this.collection.find();
        } catch (err) {
            logger.info( 'error', `${ err }` )
            throw new Error('MongoSv Error');
        }
    };

    async getById(id) {
        try {
            const allItems = await this.getAll(this.collection);
            const findItem = allItems.find(el => el._id == id);
            if (findItem !== undefined) {
                return findItem;
            } else {
                return undefined;
            }
        } catch (err) {
            logger.info( 'error', `${ err }` )
            throw new Error('MongoSv Error');
        }
    }

    async deleteById(id) {
        try {
            const getItem = await this.getById(id);
            if (getItem !== undefined) {
                await this.collection.deleteOne({_id: id});
                return getItem;
            } else {
                return undefined;
            }
        } catch (err) {
            logger.info( 'error', `${ err }` )
            throw new Error('MongoSv Error');
        }
    }
}





