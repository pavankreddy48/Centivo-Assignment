require("dotenv").config();
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const dataFile = process.env.DATA_FILE;
const collectionName = process.env.COLLECTION_NAME;

const userSchema = require("../models/User");
const fs = require("fs").promises;

async function run() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");

    const db = mongoose.connection.useDb(dbName);

    // Create a model for the specific database
    const UserDb = db.model(collectionName, userSchema);

    // Data to be inserted
    const users = JSON.parse(await fs.readFile(dataFile, "utf8"));

    const usersWithObjectId = users.map((user) => ({
      _id: new ObjectId(user._id), // Convert _id to ObjectId
      name: user.name,
      email: user.email,
      age: user.age,
    }));

    await UserDb.insertMany(usersWithObjectId);
    console.log(`Data inserted`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
  }
}

run();
