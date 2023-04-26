const databaseConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.USERNAME_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    databaseName: process.env.DATABASE_NAME
  }
});

export default databaseConfig;
