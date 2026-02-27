const express = require("express");
const axios = require("axios");
const path = require("path");

const router = express.Router();


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


router.get("/hello", (req, res) => {
    res.send("Hello! This message is from Express route.");
});


router.get("/users", async (req, res) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    } catch (error) {
        res.send("Error fetching users");
    }
});

module.exports = router;