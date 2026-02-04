require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const pool = require('./database');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); //JSON parsing

// ===== APIS =====
// register
app.post('/register', async (req, res) => {
  console.log('/register endpoint hit');
  console.log('Request body:', req.body);
  
  const { email, name } = req.body;
  
  console.log('=== REGISTRATION REQUEST ===');
  console.log('Email:', email);
  console.log('Name:', name);

  try {
    const [result] = await pool.promise().query(
      'INSERT INTO users (email, name) VALUES (?, ?)',
      [email, name || null]
    );
    
    console.log('DATABASE INSERT SUCCESSFUL!');

    res.status(201).json({ message: 'User Registered!' });
  } catch (error) {
    console.error('REGISTRATION ERROR:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'This email is already registered.' });
    } else {
      res.status(400).json({ error: 'Registration failed: ' + error.message });
    }
  }
});

// api endpoint to get the google maps api key
app.get('/mapAPI', (req, res) => {
  res.json({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  });
});

// api endpoint to return emailJS keys
app.get('/emailConfig', (req, res) => {
 res.json({
   apiKey: process.env.EMAIL_API_KEY,
   serviceId: process.env.EMAIL_SERVICE_ID,
   templateId: process.env.EMAIL_TEMPLATE_ID
 });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Database: ${process.env.DB_NAME}`);
});