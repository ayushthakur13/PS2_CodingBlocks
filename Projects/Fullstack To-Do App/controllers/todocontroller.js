const { v4: uuidv4 } = require('uuid'); 
// wehenever we'll call uuidv4(), it will give a unique id

let todos = [];

module.exports.getGetToDos = (req,res)=>{
    res.send(todos)
}

module.exports.postAddToDo = (req,res)=>{
    const {name} = req.body;
    todos.push({
        id:uuidv4(),
        name
    });
    res.redirect('/gettodos');
}

module.exports.postDeleteTodo = (req,res)=>{
    const {id} = req.body;
    todos = todos.filter((task)=>{
        if(task.id === id) return false;
        return true;
    })
    res.redirect('/gettodos')
}

module.exports.getIncrease = (req,res)=>{
    const {id} = req.query;
    let index;
    todos.forEach((e,i)=>{
        if(e.id == id) index = i;
    })
    // swap
    let temp = todos[index]
    todos[index] = todos[index-1]
    todos[index-1] = temp

    // res.send('You asked to increase the priority');
    res.redirect('/gettodos');
}

module.exports.getDecrease = (req,res)=>{
    const {id} = req.query;
    let index;
    todos.forEach((e,i)=>{
        if(e.id == id) index = i;
    })
    // swap
    let temp = todos[index]
    todos[index] = todos[index+1]
    todos[index+1] = temp

    // res.send('You asked to decrease the priority');
    res.redirect('/gettodos');
}

