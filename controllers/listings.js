
 const Listing = require("../models/listing.js");
 
 module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewFrom = (req, res) => {
    // res.render("listings/new.ejs");
    res.render("listings/new.ejs", { listing: {} });
};

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
       .populate({
             path: "reviews",
                  populate: {path: "author",},
           })
       .populate("owner");
    if (!listing) {
           req.flash("error", "Listing you requested for does not exit!");
           res.redirect("/listings");
       }

    // console.log("✅ MAP_TOKEN in Server:", process.env.MAP_TOKEN); // Debugging
    res.render("listings/show.ejs", { listing, mapToken: process.env.MAP_TOKEN }); 

   };

module.exports.createListing = async (req, res) => {
        let url = req.file.path;
        let filename = req.file.filename;
        try {
            console.log("Received form data:", req.body); // ✅ Check full form data
            console.log("Price received:", req.body.listing?.price); // ✅ Check if price exists
             // ✅ Convert Price to Number
        req.body.listing.price = Number(req.body.listing.price);

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect(`/listings/${newListing._id}`);
    } catch (err) {
        next(err);
    }
    };
    
module.exports.renderEditFrom = async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
       
        if (!listing) {
            if (!listing) 
                req.flash("error", "Listing you requested for does not exit!");
            return  res.redirect("/listings");
            
        }

// //   Image Size resizeBy use this 
//       let originalImageUrl = listing.image.url;
//       originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_200");
        res.render("listings/edit.ejs", { listing });
    };
    
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
if(typeof req.file !== "undefined") {
let url = req.file.path;
let filename = req.file.filename;
listing.image = { url, filename };
await listing.save();
}
req.flash("success", "Listing Updated!");
res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res, next) => {
     let { id } = req.params;
     let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing); 
            req.flash("success", "Listing Deleted!");
            res.redirect("/listings");
    }; 