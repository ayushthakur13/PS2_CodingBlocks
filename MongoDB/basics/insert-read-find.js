// Database → Like a folder.
// Collection → Like a table (but in NoSQL).
// Document → Like a row (in JSON format).
// Field → Like a column (key-value pair inside a document).

// 1. Show current databases = show dbs;
// 2. Create a databse = use databaseName;
// 3. Create a collection = db.createCollection('collectionName');
// 4. Show current collections = show collections;

// 5. There are two ways to insert data into DB using shell
// insertOne()
// insertMany()

// 6. Show data inside a collection = db.collectionName.find()

let users = [
    {name: 'Kartik', subject: 'Web development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
]; // This is just for example.


// use mentors;
db.createCollection('teachers');
db.teachers.insertOne({name: 'Kartik', subject: 'Web development'});
db.teachers.insertOne({name: 'Monu', subject: 'Java'});

db.teachers.insertMany([
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
])

db.teachers.find()


db.createCollection('products');

// show collections;
// products
// teachers

db.products.insertMany([
    {name:'Laptop', features:['Touchpad','i-6'], company:'Dell', price:20},
    {name:'Laptop', features:['4K Screen','i-7'], company:'HP', price:30},
    {name:'Laptop', features:['SSD','i-9'], company:'Apple', price:100},
    {name:'Laptop', features:['Antiglare','i-7'], company:'Lenovo', price:50},
    {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'},
    {name:'Keyboard', features:['RGB Lighting','Mechanical'], company:'Logitech'},
]);

mentors> db.products.find();

// Find data using key
mentors> db.products.find({name:'Laptop'});

// 
db.products.find({price:{$in:[20,50]}});

// Find data using AND operation
db.products.find({name:'Laptop',features:'Antiglare'});

// Find data using OR operation
db.products.find();

// Find laptop whose price is > 25
db.products.find({
    name:'Laptop',
    price:{
        $gt:25
    }
});



db.createCollection('characters');

db.characters.insertMany([
    {name: 'Tony Stark'},
    {name: 'Thanos'},
    {name: 'Jon Snow'},
    {name: 'Robb Stark'},
    {name: 'Ross'},
    {name: 'Monica'},
    {name: 'Ted Mosby'},
    {name: 'Barney'},
    {name: 'Dr. Doom'},
    {name: 'Reed Richards'},
    {name: 'Professor X'},
    {name: 'Wolverine'},
    {name: 'Bruce Wayne'},
    {name: 'Clark Kent'},
    {name: 'Diana Prince'},
    {name: 'Barry Allen'},
    {name: 'Harley Quinn'},
    {name: 'Luke Skywalker'},
    {name: 'Darth Vader'},
    {name: 'Obi-Wan Kenobi'},
    {name: 'Yoda'},
    {name: 'Hermione'},
    {name: 'Harry Potter'},
    {name: 'Ron Weasley'},
    {name: 'Albus Dumbledore'},
    {name: 'Severus Snape'},
    {name: 'Gandalf'},
    {name: 'Daenerys Targaryen'},
    {name: 'Tyrion Lannister'},
    {name: 'Cersei Lannister'},
    {name: 'Joey Tribbiani'},
    {name: 'Chandler Bing'},
])

// We have added 32 items in collections, but when we use find()
// it will give only first 20 items 

// When we use find(), it does not return all items
// it returns iterator, this iterator contains 20 items.

// we have to write 'it' to get next 20 elements

// we can use toArray() to get all
db.characters.find().toArray(); 

// another way
db.characters.find().forEach(ch => printjson(ch));


// Pagination
db.characters.find().limit(5); // this will return first 5 elements

db.characters.find().skip(5).limit(5); // this will skip first 5 items and return next 5 items
