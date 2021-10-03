"use strict";

const {userModel} = require("../models/User.Model");
const axios = require("axios");

const getData = async (req, res) => {
  let result = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  res.status(200).json(result.data);
};

const createUser = async (req, res) => {
    let email = req.query.email;
    let newUser = new userModel({ email: email, favs: [] });
    newUser.save();
    res.status(200).json(await userModel.find({}));
  };

module.exports = {getData,createUser};
