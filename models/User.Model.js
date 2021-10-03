'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    favs:Array
});

const userModel = new mongoose.model('user',userSchema);

module.exports = {userModel};
