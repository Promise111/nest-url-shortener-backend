import { DataSource, DataSourceOptions } from 'typeorm';
import config from '.';

const connection: {
  database?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  url?: string;
} = {};

if (process.env.NODE_ENV === 'dev') {
  connection.database = config.database.database_name as string;
  connection.host = config.database.database_host as string;
  connection.port = config.database.database_port as number;
  connection.username = config.database.database_username as string;
  connection.password = config.database.database_password as string;
} else {
  connection.url = config.database.url as string;
}

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  ...connection,
  migrations: ['dist/db/migrations/*.js'],
  ssl: false,
  entities: [],
  subscribers: [],
  logging: false,
};

export const dataSource = new DataSource(typeOrmConfig);
