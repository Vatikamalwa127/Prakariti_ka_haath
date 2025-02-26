
const User = require("../models/user");

module.exports.renderSignupFrom = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async(req, res, next) => {
        try {
            let { username, email, password } = req.body;
            const newUser = new User({email, username});
          const registeredUser = await  User.register(newUser, password);
          console.log(registeredUser);
          req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Prakriti ka hath!");
            res.redirect("/listings");
          });
        } catch (e) {
            req.flash("error", e.message);
            res.redirect("/signup");
        }
 };

 module.exports.renderLoginFrom = (req, res) => {
    res.render("users/login.ejs");
   };

 module.exports.login = async (req, res) => { 
    req.flash("success", "Welcome back to Prakriti ka hath!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};  

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
      if (err) {
          return next (err);
      }
      req.flash("success", "you are logged out!");
      res.redirect("/listings");
   });
  };