const Todo = require('../models/todo');

module.exports.getGetToDos = (req,res)=>{
    Todo.getTodos()
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).json({ error: err.message });
        })

}

module.exports.postAddToDo = (req,res)=>{
    const {name} = req.body;
    Todo.addTodo(name)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).json({ error: err.message });
        })
}

module.exports.postDeleteTodo = (req,res)=>{
    const { id } = req.body;
    Todo.deleteTodo(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).json({ error: err.message });
        })
}

module.exports.getIncrease = (req,res)=>{
    const {id} = req.query;
    Todo.increasePriority(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).json({ error: err.message });
        })
}

module.exports.getDecrease = (req,res)=>{
    const {id} = req.query;
    Todo.decreasePriority(id)
        .then(()=>{
            return Todo.getTodos();
        })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500).json({ error: err.message });
        })
}
