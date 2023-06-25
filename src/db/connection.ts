import { configDotenv } from 'dotenv';
import { Sequelize } from 'sequelize';
configDotenv();

const { BASE, USER, SQL_PASS } = process.env;
if (BASE === undefined || USER === undefined || SQL_PASS === undefined) {
  throw new Error('Please add a requirement environment variable');
}

const sequelize = new Sequelize(BASE, USER, SQL_PASS, {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
