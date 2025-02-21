const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");
const review = require("./models/review.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
app.use(express.static(path.join(__dirname, "/public")));

const listingRouter = require("./Routes/listing.js");
const reviewRouter = require("./Routes/review.js");
const userRouter = require("./Routes/user.js")
const session = require("express-session");
const MONGO_URL = "mongodb://127.0.0.1:27017/Prakrit_ka_haath";

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err); 
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 5 * 25 * 60 * 60 * 1000,
        maxAge: 5 * 25 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


app.get("/", (req, res) => {
    res.send("hi, I am root");
}); 

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});
    
   app.get("/demouser", async (req, res) => {
         let fakeUser = new User({
            email: "anandpsiddharth@gmail.com",
            username: "siddharth",
        });
       let registeredUser = await User.register(fakeUser, "HelloMeerut");
       res.send(registeredUser);
   });

    app.use("/listings", listingRouter);
    app.use("/listings/:id/reviews", reviewRouter);
    app.use("/", userRouter);
// page not found! 
    app.all("*", (req, res, next) => {
        next(new ExpressError(404,"Page Not Found!"));
    });
// Define midilware error handling
   app.use(( err, req, res, next) => {
    let {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).render("error.ejs", { message});
     //  res.status(statusCode).send(message);
   });

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});