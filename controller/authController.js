const { login, register } = require("../services/authService");

const authController = require("express").Router();

authController.get("/login", (req, res) => {
  // const payload = {
  //     _id:'635ghgvh552jhgfd',
  //     username: 'peter',
  //     roles: ['user']
  // };
  // const token = jwt.sign(payload, jwtSecret, {expiresIn: '4h'}); //next time expirins 4h
  // res.cookie('jwt', token);
  res.render("loginPage", {
    title: "Login Page",
  });
});

authController.post("/login", async (req, res) => {
    try {
  const result = await login(req.body.username, req.body.password);
  attachToken(req, res, result);
  res.redirect("/");
} catch (err) {
    res.render("loginPage", {
      title: "Login Page",
      error: err.message.split("\n"),
    });
  }
});

authController.get("/register", (req, res) => {
  res.render("registerPage", {
    title: "Register Page",
  });
});

authController.post("/register", async (req, res) => {
    console.log(req.body)
 try {
   if (req.body.username.trim() == "" || req.body.password.trim() == "") {
     throw new Error("All fields are required!");
   }
   if (req.body.password.trim() != req.body.repass.trim()) {
     throw new Error("Password don't match!");
   }
    console.log(req.body.password.trim())

    const result = await register(req.body.username.trim(), req.body.password.trim());
    attachToken(req, res, result);
    res.redirect("/");
  } catch (err) {
    res.render("registerPage", {
      title: "Register",
      error: err.message.split("\n"),
    });
  }
});

function attachToken(req, res, data) {
  const token = req.signJwt(data); 
  res.cookie('jwt', token, { maxAge: 14500000 });
}

module.exports = authController;
