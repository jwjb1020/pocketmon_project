
import mysql from 'mysql2/promise';

export default async function connectDB() {
  return await mysql.createPool({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT || 3000, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE || 'pocketmon', 
    connectionLimit: 1, // Setting connectionLimit to "1" in a serverless function environment optimizes resource usage, reduces costs, ensures connection stability, and enables seamless scalability.
    maxIdle: 1, // max idle connections, the default value is the same as `connectionLimit`
    enableKeepAlive: true,
  });
}

