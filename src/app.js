const express = require("express");
const app = express();
const db = require("./database/config");
const cors = require("cors");

db.sync();

const commentsRoutes = require("./routes/comments.routes");

app.use(express.json());
app.use(cors("*"));
app.use("/comments", commentsRoutes);

module.exports = app;
