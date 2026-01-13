import * as path from 'node:path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default {
  port: Number.parseInt(process.env.PORT as string, 10),
  env: process.env.NODE_ENV,
  baseUrl: process.env.BASE_URL || `http://localhost:${process.env.PORT}`,
  database: {
    database_name: process.env.DATABASE_NAME,
    database_username: process.env.DATABASE_USERNAME,
    database_password: process.env.DATABASE_PASSWORD,
    database_port: Number.parseInt(process.env.DATABASE_PORT as string, 10),
    database_host: process.env.DATABASE_HOST,
    url: process.env.DATABASE_URL,
  },
  redis: {
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USER,
    password: process.env.REDIS_PASS,
    port: Number(process.env.REDIS_PORT),
  },
  jwt: {
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    expiresIn:
      Number.parseInt(process.env.JWT_EXPIRES_IN as string, 10) || '6h',
    issuer: process.env.ISSUER || 'crednet/livio',
  },
};
