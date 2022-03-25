const express = require("express");
const app = express();
const db = require("./database/config");

db.sync();

const commentsRoutes = require("./routes/comments.routes");

app.use(express.json());

app.use("/comments", commentsRoutes);

module.exports = app;
