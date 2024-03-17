// Import express
const express = require('express');
// Import dotenv to load environment variables
require('dotenv').config();
// Import dependencies for authentication
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const initializePassport = require('./passport-config');
const db = require('./db');

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Initialize passport
app.use(passport.initialize());
// Configure passport
initializePassport(passport);

// User registration route
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Check if user already exists
        const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length) {
            console.log(`Registration attempt failed: User already exists with email ${email}`);
            return res.status(400).send('User already exists with this email.');
        }
        
        // Insert new user
        await db.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
        console.log(`User ${username} registered successfully.`);
        res.status(201).send('User registered successfully.');
    } catch (error) {
        console.error('Error registering new user:', error.stack);
        res.status(500).send('Error registering user.');
    }
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (error) => {
    console.error(`Failed to start server on port ${PORT}:`, error.stack);
});
