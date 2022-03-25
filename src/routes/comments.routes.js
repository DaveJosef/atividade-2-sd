const { Router } = require("express");
const commentsController = require("../controllers/commentsController");

const routes = Router();

routes.get("/", commentsController.list);
routes.get("/book/:bookId", commentsController.listByBook);
routes.post("/", commentsController.create);
routes.delete("/:id", commentsController.delete);

module.exports = routes;
