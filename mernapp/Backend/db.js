const mongoose = require("mongoose");

const MONGOURI =
  "mongodb+srv://mangalkgupta004:qJYuW7Nk0QuOlp3T@cluster0.ltg6mvl.mongodb.net/FoodDelievery?retryWrites=true&w=majority&appName=Cluster0";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
    // Ensure the connection is ready before querying
    const db = mongoose.connection.db;

    // Fetching data from the "food_items" collection
    const foodItemsCollection = db.collection("food_items");
    const data = await foodItemsCollection.find({}).toArray();

    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

module.exports = connectToDatabase;
