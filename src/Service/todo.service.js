const todoSchema = require("../db/connection").todo;

const insertTodo = async (body, userId) => {
  const created = await todoSchema.create({
    ...body,
    createdBy: userId,
  });

  return created.dataValues;
};

const updateTodo = async (body, userId) => {
  const id = body.id;
  delete body.id;
  const update = await todoSchema.update(body, {
    where: { id: id, createdBy: userId },
  });
  return update;
};

const selectTodo = async (condition, userId) => {
  const todo = await todoSchema.findAll({
    where: { ...condition, createdBy: userId },
  });
  return todo;
};

module.exports = {
  insertTodo,
  updateTodo,
  selectTodo,
};
