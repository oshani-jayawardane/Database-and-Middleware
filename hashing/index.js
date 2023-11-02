const express = require('express');
const app = express();
const port = 4000;

const bcrypt = require('bcryptjs');

// Password to hash
const passwordToHash = 'admin';

// Generate a salt
const salt = bcrypt.genSaltSync(10);

// Hash the password
const hashedPassword = bcrypt.hashSync(passwordToHash, salt);

console.log('Hashed Password:', hashedPassword);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
