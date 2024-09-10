const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const matchRoutes = require("./routes/matchRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/tinder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/users", userRoutes);
app.use("/matches", matchRoutes);
app.use("/messages", messageRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
