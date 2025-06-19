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
        reject(err);
    }
}
// we can also use promise or normal function instead of this 

function getDB(){
    if(!_db) return null;
    return _db;
}


module.exports.mongoConnect = main;
module.exports.getDB = getDB;
