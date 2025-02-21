
// const mongoose = require("mongoose");
// const { create } = require("./listing");
// const Schema = mongoose.Schema;

// const reviewSchema = new mongoose.Schema({
//     rating: { 
//         type: Number, 
//         min: 1,
//         max: 5,
//         required: true },
//     comment: { type: String, required: true },
//     createdAt: {
//         type: Date,
//         default: Date.now(),
//     },
//     listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true, },
// });
// module.exports = mongoose.model("Review", reviewSchema);
// const Review = mongoose.model("Review", reviewSchema);
// module.exports = Review;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    comment: String,
    rating: { 
        type: Number, 
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Review", reviewSchema);
