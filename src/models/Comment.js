const { DataTypes } = require("@sequelize/core");

const database = require("../database/config");

const Comment = database.sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Comment;
