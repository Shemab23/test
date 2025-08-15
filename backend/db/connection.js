// connection.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection;

try {
  connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,  // max concurrent connections
    queueLimit: 0
  });
  console.log('Connected to the Hostinger database successfully');
} catch (err) {
  console.error('Failed to connect:', err.message);
}

export default connection;
