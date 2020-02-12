import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

import databaseConfig from '../config/database';

const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  associate() {
    Recipient.associate(User);
    User.associate(Recipient);
  }
}

export default new Database();
