const express = require("express");
const connectToDatabase = require("./db");

const app = express();
const port = 5000;

connectToDatabase();

app.use(express.json());
app.use('/api',require("./routes/CreateUser"));
app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
