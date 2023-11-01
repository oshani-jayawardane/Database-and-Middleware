require('dotenv').config();

const DBroutes = require('./routes/dbroutes');
// const MWroutes = require('./routes/mwroutes');

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/database', DBroutes);
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
