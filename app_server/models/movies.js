const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    releaseDate: { type: String, required: true },
    certification: { type: String, required: true },
    genre: { type: String, required: true },
    runtime: { type: String, required: true },
    rating: { type: Number, required: true,
    min: 0, max: 5,
    default: 0 },
    tagline: { type: String, required: true },
    overview: { type: String, required: true },
    poster: { type: String, required: true },
    people: [personSchema],
    reviews: [reviewSchema]
});

const peopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
});

const reviewSchema = new mongoose.Schema({ 
    author: { type: String, required: true },
    rating: { type: Number, required: true,
    min: 0, max: 5,
    },
    reviewText: String,
    createdOn: { type: Date,
      "default": Date.now
    }
});

mongoose.model("Movie", movieSchema);