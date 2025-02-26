const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js"); // Adjust the path based on your project structure
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage })
const { render } = require("ejs");

router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
   
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing)
);
  
// New Route - Form to create a new listing
router.get("/new", isLoggedIn, listingController.renderNewFrom);

  router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
)
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

// Edit Route - Form to edit an existing listing
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditFrom)
);

module.exports = router;
