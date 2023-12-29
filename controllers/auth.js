const User = require("../models/User");
const bcryptjs = require("bcryptjs");
exports.getSignUp = (req, res, nxt) => {
  res.render("auth/signup", {
    title: "signUp",
    path: req.path,
  });
};
exports.postSignUP = async (req, res, nxt) => {
  const name = req.body.name;
  const email = req.body.email;
  const passwordStr = req.body.password;
  const password = await bcryptjs.hash(passwordStr, 8);
  let user = await User.findOne({ email });
  if (user) {
    console.log("email used");
    return res.redirect("/signup");
  }
  user = await User.create({
    name,
    email,
    password,
  });
  await user.save();
  console.log("create user");
  res.redirect("/");
};
exports.getLogin = (req, res, nxt) => {
  res.render("auth/login", {
    title: "LOGIN",
    path: req.path,
  });
};

exports.postLogin = async (req, res, nxt) => {
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;
  const user = await User.findOne({ email });
  if (!user) {
    res.redirect("/signup");
  }
  const mathPass = await bcryptjs.compare(pass, user.password);

  if (!mathPass) {
    return res.redirect("/login");
  }
  req.session.isLog = true;
  req.session.user = user;
  req.session.save();
  return res.redirect("/");
};
exports.postLogOut = async (req, res, nxt) => {
  await res.session.destroy();
  console.log("delete session");
  return res.redirect("/");
};
