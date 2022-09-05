/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'delivery-management',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;
