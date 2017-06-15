require('dotenv').config();
const ENV          = process.env.ENV || "development";
const PORT         = process.env.PORT || 8080;

const express     = require("express");
const bodyParser  = require("body-parser");
const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);


const app = express();

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});