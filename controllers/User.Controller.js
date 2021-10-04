"use strict";

const { userModel } = require("../models/User.Model");
const axios = require("axios");

const getData = async (req, res) => {
  let result = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  res.status(200).json(result.data);
};

const getFavs =async (req,res) => {
res.status(200).json(await userModel.find({}))
}

const createFavs = async (req, res) => {
  let email = req.query.email
  let fav = req.body;
  let newUser = new userModel({ email: email, favs: fav });
  newUser.save();
  res.status(200).json(await userModel.find({}));
};

const updateFavs = async (req, res) => {
  let id = req.params.id;
  let updatedFav = req.body;

  await userModel.findOne({ _id: id }).then(async (item) => {
    item.favs = updatedFav;
    await item.save();
  });
  res.status(200).json(await userModel.find({}));
};

const deleteFav = async (req,res) => {
  let id = req.params.id;
  await userModel.findByIdAndDelete(id)
  res.status(200).json(await userModel.find({}))
}

module.exports = { getData, createFavs, updateFavs, deleteFav, getFavs };
