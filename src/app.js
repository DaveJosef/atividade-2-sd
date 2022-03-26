const express = require("express");
const app = express();
const db = require("./database/config");

const {ROUTES} = require('./configuration/routes');
const {setupProxies} = require('./configuration/proxy');

db.sync();

const commentsRoutes = require("./routes/comments.routes");

app.use(express.json());

app.use("/comments", commentsRoutes);

setupProxies(app, ROUTES);

module.exports = app;
