import { RedisClient, RedisError } from "redis";
import * as redis from "redis";
import * as Logger from '@zebpay/colt';
// import Logger from "../utils/logger.service";
// import { LOG_LEVEL } from "../enums/log_level.enum";

export default class RedisService {
  private client: RedisClient;
  private logger:Logger = new Logger('redis');
  /**
   * @description Initialize the redis client along with the error listener
   */
  public initClient() {
    this.client = redis.createClient();
    /**
     * To connect to specific PORT and HOST
     * connect using redis.createClient(port, host);
     */
    this.client.on("error", (error: RedisError) => {
      this.logger.error('Redis error ', error);
      // Logger.logMessage(LOG_LEVEL.ERROR, error.message, "redisService");
    });
  }

  /**
   * @description put key|values in the redis
   * @param key
   * @param value
   */
  public put(key: string, value: string) {
    this.client.set(key, value);
  }

  /**
   * @description get values from the redis
   * @param key
   * @param callback
   */
  private get(key: string, callback: redis.Callback<string>): void {
    this.client.get(key, callback);
  }
}
