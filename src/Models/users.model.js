module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    },

    createdAt: {
        type: Sequelize.DATE,
    },

  });

  return users;
};
