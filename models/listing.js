
const mongoose = require("mongoose");
const Review = require("./review");  // Import Review model
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.sharmispassions.com/wp-content/uploads/2013/01/MultigrainAtta9.jpg",
        set: (v) => v.trim() === "" ? "https://www.sharmispassions.com/wp-content/uploads/2013/01/MultigrainAtta9.jpg" : v,
    },
    price: {
        min: Number,
        max: Number
    },
    location: String,
    city: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

//  Middleware: Convert price string to min-max before saving
listingSchema.pre("save", function (next) {
    if (typeof this.price === "string") {
        let priceArray = this.price.match(/\d+/g);
        this.price = {
            min: parseInt(priceArray[0]),
            max: parseInt(priceArray[1] || priceArray[0])  
        };
    }
    next();
});

//  Delete all reviews related to a listing before deleting it
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
