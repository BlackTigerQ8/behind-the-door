const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Secret route to serve the flag file
app.get("/:secret", (req, res) => {
  const secretKey = "flag123";
  if (req.params.secret === secretKey) {
    res.sendFile(path.join(__dirname, "flag.txt"));
  } else {
    res.status(404).send("Not Found");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
