// Requires mongoose for the MongoDB and sets the schema for the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creates a collection with the fields and data types below.  All values are required except subtitle, and the googleId must be unique
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});
// Collection name is Book and that is where book data is saved IAW fields above
const Book = mongoose.model("Book", bookSchema);
// Exports
module.exports = Book;
