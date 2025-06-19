const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let _db;

const dbName = 'todoApp';

async function main() {
    try {
        await client.connect();
        console.log('Connected succesfully to the server');
        _db = client.db(dbName);
    } 
    catch (err) {
        throw err;
    }
}
// we can also use promise or normal function instead of this 

function getDB(){
    if(!_db) throw new Error("DB not initialized");
    return _db;
}


module.exports.mongoConnect = main;
module.exports.getDB = getDB;
