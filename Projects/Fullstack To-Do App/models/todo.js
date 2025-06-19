const { ObjectId } = require('mongodb');
const {getDB} = require('../database/database');

async function getPriority() {
    const counter = getDB().collection('counter');

    let doc = await counter.findOne({ id: 'myCounter' });

    if (!doc) {
        await counter.insertOne({ id: 'myCounter', val: 1 });
        return 1;
    }

    const updated = await counter.updateOne(
        { id: 'myCounter' },
        { $inc: { val: 1 } }
    );

    if (!updated.modifiedCount) {
        throw new Error("Could not update counter");
    }

    const newDoc = await counter.findOne({ id: 'myCounter' });

    if (!newDoc || typeof newDoc.val !== 'number') {
        throw new Error("Counter value missing after update");
    }

    return newDoc.val;
}




class Todo{

    static getTodos(){
        return new Promise(async (resolve,reject)=>{
            try{
                let todos = await getDB().collection('todos');
                let data = await todos.find({}).sort({priority:1}).toArray();
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

            const db = getDB();
            let todos = db.collection('todos');

            let currentPriority = await getPriority();

            const data = {
                name,
                priority: currentPriority
            }

            const result = await todos.insertOne(data);

            resolve('Added successfully');
        }
        catch(err){
            reject(err);
        }
    })
}


    static deleteTodo(id){ 
        return new Promise(async (resolve, reject) => {
            try {

                let objId;
                try {
                    objId = new ObjectId(id);
                } 
                catch (err) {
                    throw new Error("Invalid ObjectId: " + id);
                }

                const todos = await getDB().collection('todos');
                const result = await todos.deleteOne({ _id: objId });

                if (result.deletedCount === 0) {
                    throw new Error("No todo found with that ID");
                }

                resolve('Deleted successfully');
            } 
            catch (err) {
                reject(err);
            }
        });
    }


    static increasePriority(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const todos = getDB().collection('todos');

                let objId;
                try {
                    objId = new ObjectId(id);
                } 
                catch {
                    return reject(new Error("Invalid ObjectId for increasePriority: " + id));
                }

                const currentItem = await todos.findOne({ _id: objId });
                if (!currentItem) return reject(new Error("Item not found for ID: " + id));

                const prevItem = await todos.findOne({
                    priority: { $lt: currentItem.priority }
                }, { sort: { priority: -1 } });

                await todos.updateOne({ _id: objId }, { $set: { priority: prevItem.priority } });
                await todos.updateOne({ _id: prevItem._id }, { $set: { priority: currentItem.priority } });

                resolve('Increased priority');
            } 
            catch (err) {
                reject(err);
            }
        });
    }


    static decreasePriority(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const todos = getDB().collection('todos');

                let objId;
                try {
                    objId = new ObjectId(id);
                } 
                catch {
                    return reject(new Error("Invalid ObjectId for decreasePriority: " + id));
                }

                const currentItem = await todos.findOne({ _id: objId });
                if (!currentItem) return reject(new Error("Item not found for ID: " + id));

                const nextItem = await todos.findOne({
                    priority: { $gt: currentItem.priority }
                }, { sort: { priority: 1 } });

                await todos.updateOne({ _id: objId }, { $set: { priority: nextItem.priority } });
                await todos.updateOne({ _id: nextItem._id }, { $set: { priority: currentItem.priority } });

                resolve('Decreased priority');
            } 
            catch (err) {
                reject(err);
            }
        });
    }

}

module.exports = Todo;
