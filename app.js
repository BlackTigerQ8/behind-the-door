const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the flag file
app.get("/flag.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "flag.txt"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
