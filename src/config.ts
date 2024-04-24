export default () => ({
  secretKey: process.env.JWT_SECRET || 'secretKey',
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  db: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    name: process.env.POSTGRES_DB || 'my_database',
    username: process.env.POSTGRES_USER || 'my_username',
    password: process.env.POSTGRES_PASSWORD || 'my_password',
  },
});
