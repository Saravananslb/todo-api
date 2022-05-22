const { insertTodo, updateTodo, selectTodo } = require('../Service/todo.service');

const createTodo = async(req, res) => {
    try {
        const body = req.body;
        const userId = res.locals.userId;
        console.log(res.locals)
        const createdTodo = await insertTodo(body, userId);
        res.json({status: true, createdTodo});
        return;
    }
    catch (error) {
        res.json(error);
    }
}

const editTodo = async(req, res) => {
    try {
        const body = req.body;
        const userId = res.locals.userId;
        const updatedTodo = await updateTodo(body, userId);
        res.json({status: true, updatedTodo});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const getTodo = async(req, res) => {
    try {
        const condition = req.query;
        const userId = res.locals.userId;
        const todo = await selectTodo(condition, userId);
        res.json({ status: true, todo });
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = {
    createTodo,
    editTodo,
    getTodo
}