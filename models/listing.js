
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
        url: String,
        filename: String,
    },
    price: { type: Number, required: true },
    
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
     category: {
        type:String,
        enum: ["Chakki Atta", "Home Made Pickles","Seeds", "Lentils(Daal)", "Oil", "Amla Murabba", "Dry Fruits", "Home Made Masalas","Winter Special"]
     }
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
