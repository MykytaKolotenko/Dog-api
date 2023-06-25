import sequelize from './db/connection';
import { configDotenv } from 'dotenv';
import app from './server';

configDotenv();

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('⚡Connection has been established successfully.');
  } catch (error) {
    console.error('😭 Unable to connect to the database:', error);
  }
  console.log(`⚡Server is running at http://localhost:${port}`);
});
