const mongoose = require('mongoose');
const dbURI = "mongodb+srv://moviereviewdb.2petmny.mongodb.net/MovieReviewDB";

try {
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
);
}
 catch (e) {
  console.log("could not connect");
}
require('./locations');