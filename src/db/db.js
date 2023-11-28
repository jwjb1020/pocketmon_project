
import mysql from 'mysql2/promise';

export default async function connectDB() {
  return await mysql.createPool({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT || 3000, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD || null, 
    database: process.env.DB_DATABASE || 'pocketmon', 
    waitForConnections: true,
    connectionLimit: 10, // 최대 연결 수 조절
    queueLimit: 0
  });
}

