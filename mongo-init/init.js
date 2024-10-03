db = db.getSiblingDB("mydb");
db.test.insertOne({ name: "sample", message: "Hello from MongoDB!" });
