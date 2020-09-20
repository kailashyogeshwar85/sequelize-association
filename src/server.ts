import * as errorHandler from 'errorhandler';

import app from './app';
import { initDatabase } from './database/database';
import * as Logger from '@zebpay/colt';
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());


const dbConfig = {
  host: process.env.HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  dialect: 'postgres',
};


const configureLogger = () => {
  const logOptions = {
    level: process.env.LOG_LEVEL,
    logPath: process.env.LOG_PATH,
    logFile: process.env.LOG_FILE,
  };

  Logger.setLoggerOptions(logOptions);
  Logger.addAdapter(process.env.LOG_ADAPTER, Logger.setAdapter(process.env.LOG_ADAPTER));
}

configureLogger();

const logger = new Logger(__filename);

logger.info('Starting server');

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  const sequelize = initDatabase(dbConfig);

  sequelize.authenticate().then(() => {
    logger.info('Database connected')
    try {
      sequelize.sync({ });
    } catch(e) {
      console.log(e);
    }
  })

  logger.info(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
});


export default server;
