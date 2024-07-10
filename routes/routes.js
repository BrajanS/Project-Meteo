const express = require("express");
const route = express.Router();
require("dotenv").config({ path: "config.env" });
const axios = require("axios");


route.get("/", async (req, res) => {
  res.render("index.ejs", {
    meteo: null,
    error: null,
  });
});

route.get("/meteo", async (req, res) => {
  const apiKey = process.env.meteo_api;
  const ville = req.query.city;
  const meteoURL = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await axios.get(meteoURL);
    const meteo = response.data;
    console.log(meteo);
    res.render("index.ejs", {
      meteo,
      ville,
      error: null,
    });
  } catch (err) {
    console.log(err.message);
    res.render("index.ejs", {
      meteo: null,
      ville,
      error: err.message,
    });
  }
});

module.exports = route;