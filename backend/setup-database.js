require('dotenv').config();
const connection = require('./database');

// sql to create users table
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,

    name VARCHAR(255) DEFAULT NULL
  );
`;

// run setup
async function setupDatabase() {
  try {
    console.log('Setting up database...');
    
    await connection.promise().query(createTableSQL);
    console.log('Users table created successfully');
    
    console.log('Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();