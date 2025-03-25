const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const collectionName = process.env.COLLECTION_NAME;

// Define the schema for the user
const userSchema = new mongoose.Schema({
  _id: ObjectId, // Use String for ObjectId if you are providing custom IDs
  name: String,
  email: String,
  age: Number,
});

// Create a model based on the schema
const User = mongoose.model(collectionName, userSchema);

// Export the model
module.exports = userSchema;
