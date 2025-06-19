const {getDB} = require('../database/database');

const { v4: uuidv4 } = require('uuid'); 
// wehenever we'll call uuidv4(), it will give a unique id

class Todo{

    static getTodos(){
        return new Promise(async (resolve,reject)=>{
            try{
                let todos = await getDB().collection('todos');
                let data = await todos.find({}).toArray();
                resolve(data);
            }
            catch(err){
                reject(err);
            }
        })
    }

    static addTodo(name){
        return new Promise(async (resolve,reject)=>{
            try{
                let todos = await getDB().collection('todos');

                const data = {
                    name,
                    id:uuidv4()
                }

                await todos.insertOne(data);
                resolve('Added succesfully');
            }
            catch(err){
                reject(err);
            }
        })
    }

    static deleteTodo(id){
        return new Promise(async (resolve,reject)=>{
            try{
                let todos = await getDB().collection('todos');
                await todos.deleteOne({id: id});
                // we can also use mongodb object id to delete the item
                // await todos.deleteOne({_id: new ObjectId(id)});
                resolve('Deleted succesfully');
            }
            catch(err){
                reject(err);
            }
        })
    }

}

module.exports = Todo;
