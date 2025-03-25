// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const mongoURI = process.env.MONGODB_URI; // No database specified
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// User schema
const userSchema = require("../models/User");

const db = mongoose.connection.useDb(dbName);
const User = db.model(collectionName, userSchema);

// GET endpoint to retrieve user by ID
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  // Check if the userId is a valid ObjectId
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  try {
    console.log("userId ", userId);
    const userObjectId = new ObjectId(userId);
    const user = await User.findOne({
      _id: userObjectId,
      age: { $gt: 21 },
    });

    console.log("user ", user);
    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found or age is not greater than 21" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
