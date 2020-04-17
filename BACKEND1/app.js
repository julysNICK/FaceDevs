const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/Users");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const app = express();
const db = require("./config/keys").MongoURI;
require("./config/passport");
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo conectado..");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
//bodyParse
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mysecretsession",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
//app.use("/users/register", require("./routes/Users"));
app.use("/api/users", routes);
app.listen(4005, () => {
  console.log("servidor rodando");
});
