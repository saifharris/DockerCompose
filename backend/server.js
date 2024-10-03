const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;
const mongoURL = "mongodb://mongo:27017"; // Docker Compose will create a MongoDB service

let db;

MongoClient.connect(mongoURL, { useUnifiedTopology: true })
  .then((client) => {
    db = client.db("mydb");
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

app.get("/api/data", async (req, res) => {
  try {
    const collection = db.collection("test");
    const document = await collection.findOne({ name: "sample" });
    res.json({ message: document ? document.message : "No data found" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
