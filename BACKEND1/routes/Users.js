const { Router } = require("express");
const passport = require("passport");
const mailer = require("nodemailer");

const routes = Router();

const config = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b2990a2b78c7f3",
    pass: "ada090e3a97757",
  },
};
const transporter = mailer.createTransport(config);

routes.post(
  "/register",
  passport.authenticate("local-signup", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);
//sen email
routes.post("/send-email", (req, res) => {
  const message = {
    from: "julysmartins54@gmail.com",
    to: "julystube@gmail.com",
    subject: "Sua confirmaçao de conta",
    text: "seu codigo de verificaçao:813457",
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(400).send("falhou tente novamente");
    }
    return res.status(200).send("enviou");
  });
});

//login handle
routes.post(
  "/login",
  passport.authenticate("local-signin", {
    successRedirect: "/send-email",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

module.exports = routes;
