// let todos = [];

const Todo = require('../database/script');

module.exports.getGetToDos = (req,res)=>{
    Todo.getTodos()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: `Unable to fetch todos: ${err.message}` }); 
        });
}

module.exports.postAddToDo = (req,res)=>{
    const {name} = req.body;
    Todo.addToDo(name)
        .then(() => {
            return Todo.getTodos();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: `Unable to add todo: ${err.message}` });
        });
}

module.exports.postDeleteTodo = (req,res)=>{
    const {id} = req.body;
    Todo.deleteTodo(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err)=>{
            res.json({error: `Unable to delete todo: ${err.message}`})
        })
}

module.exports.getIncrease = (req,res)=>{
    const {id} = req.query;
    Todo.increasePriority(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err)=>{
            res.json({error: `Unable to increase priority: ${err.message}`})
        })
}

module.exports.getDecrease = (req,res)=>{
    const {id} = req.query;
    Todo.decreasePriority(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err)=>{
            res.json({error: `Unable to decrease priority: ${err.message}`})
        })
}
