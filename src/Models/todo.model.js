module.exports = (sequelize, Sequelize) => {
  const todo = sequelize.define("todos", {
    todo: {
      type: Sequelize.STRING,
    },

    createdBy: {
      type: Sequelize.STRING,
    },

    isCompleted: {
      type: Sequelize.BOOLEAN,
    },

    createdAt: {
        type: Sequelize.DATE,
    },

  });

  return todo;
};
