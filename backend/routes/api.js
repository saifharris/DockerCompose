const express = require("express");
const router = express.Router();

// Basic API route (not really necessary, but placeholder for future routes)
router.get("/", (req, res) => {
  res.send("API Home");
});

module.exports = router;
