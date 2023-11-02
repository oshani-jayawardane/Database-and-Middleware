require('dotenv').config();

const DBroutes = require('./routes/dbroutes');
// const MWroutes = require('./routes/mwroutes');

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // for hashing and comparing passwords
const jwt = require('jsonwebtoken'); // for creating and verifying JSON Web Tokens (JWT)
const crypto = require('crypto'); // for generating random strings for secret key

// initialize express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Admin credentials (for demonstration purposes)
const adminCredentials = {
    username: process.env.ADMIN_USERNAME,
    passwordHash: process.env.ADMIN_PASSWORD,
};

const SECRET_KEY = crypto.randomBytes(32).toString('hex');
// const SECRET_KEY = process.env.SECRET_KEY;

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}

// Login route
app.post('/admin/login', (req, res) => {
    try {
        const { username, password } = req.body;

        console.log('Received request with username:', username, 'and password:', password);

        if (username !== adminCredentials.username) {
            console.log('Invalid username')
            return res.status(401).json({ message: 'Invalid username' });
        }

        bcrypt.compare(password, adminCredentials.passwordHash, (err, result) => {
            if (err || !result) {
                console.log('Invalid password')
                return res.status(401).json({ message: 'Invalid password' });
            }

            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'An internal server error occurred' });
    }
});

// routes
app.use('/api/database', DBroutes);
// app.use('/api/middleware', MWroutes);

// Protected route
// app.use('/api/database', verifyToken, DBroutes);
// app.use('/api/middleware', MWroutes);

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server connected to db & listening on port ${process.env.PORT}`);
        })
    })
    .catch(err => console.log(err));
