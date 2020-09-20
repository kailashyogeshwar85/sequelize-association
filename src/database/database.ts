import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';
import * as Logger from '@zebpay/colt';

const logger = new Logger(__filename);

export const initDatabase = (dbConfig): Sequelize => {
  dbConfig.models = [join(__dirname, 'models')];
  dbConfig.logging = (str) => logger.debug(str);
  return new Sequelize(dbConfig);
}
