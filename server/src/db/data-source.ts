import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_SERVER_HOST,
  port: Number(process.env.MYSQL_SERVER_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname, '../**/entity/**.entity.{ts,js}'],
  migrations: ['src/db/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
