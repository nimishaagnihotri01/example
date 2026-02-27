const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = 3000;

// Use routes
app.use("/", mainRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});