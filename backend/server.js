const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;
const mongoURL = "mongodb://root:example@mongo:27017";
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
    res.json({ message: document ? document.message : "Hi from Mlops" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
