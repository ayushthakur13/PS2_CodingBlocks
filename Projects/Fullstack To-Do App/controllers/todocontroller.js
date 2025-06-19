const Todo = require('../models/todo');

module.exports.getGetToDos = (req,res)=>{
    Todo.getTodos()
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send(err.message);
        })
}

module.exports.postAddToDo = (req,res)=>{
    const {name} = req.body;
    Todo.addTodo(name)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send(err.message);
        })
}

module.exports.postDeleteTodo = (req,res)=>{
    const {id} = req.body;
    Todo.deleteTodo(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send(err.message);
        })
}

module.exports.getIncrease = (req,res)=>{
    
}

module.exports.getDecrease = (req,res)=>{
    
}
