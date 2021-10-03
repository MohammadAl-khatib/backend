'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const MONGO_PORT = process.env.MONGO_PORT;
mongoose.connect(`${MONGO_PORT}/exercise`,{useNewUrlParser: true, useUnifiedTopology: true});
const {getData,createUser} = require('./controllers/User.Controller')

app.get('/data',getData);
app.post('/create-user',createUser)

app.listen(PORT,()=>{
    console.log(`listeninning to ${PORT}`)
})