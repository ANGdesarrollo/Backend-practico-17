const ContainerMongo = require('../../container/mongoContainer');
const UserModel = require('../../models/user');

exports = class ContainerMongoDaos extends ContainerMongo {
    constructor() {
        super(UserModel);
    }
}
