const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3333;

const searchRouter = require(__dirname + "/routes/search");

app.use(bodyParser.json());
app.use(cors());
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/searchDB");
};

main()
  .then(() => {
    console.log("DB Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", searchRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
