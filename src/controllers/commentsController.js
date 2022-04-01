const Comment = require("../models/Comment");
const database = require("../database/config");

module.exports = {
  async list(req, res) {
    try {
      const comments = await Comment.findAll();

      return res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({ message: "Internal error" });
    }
  },
  async listByBook(req, res) {
    try {
      const { bookId } = req.params;

      const comments = await Comment.findAll({
        where: {
          bookId,
        },
      });

      return res.status(200).json({ comments });
    } catch (err) {
      return res.status(500).json({ message: "Internal error" });
    }
  },
  async create(req, res) {
    try {
      const comment = await Comment.create(req.body);

      return res.status(201).json({ comment });
    } catch (err) {
      return res.status(500).json({ message: "Internal error" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      await Comment.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
      return res.status(500).json({ message: "Internal error" });
    }
  },
};
