// Embedded Documents = A nested object inside a document, used to represent related data in a structured way.

db.teachers.deleteMany({});

// Insert new documents with embedded 'company' objects
db.teachers.insertMany([
    {
        name: 'Kartik',
        subject: 'Web development',
        company:{
            name:'Coding Blocks',
            country: 'India'
        }
    },
    {
        name: 'Monu',
        subject: 'Java',
        company:{
            name:'CodeSkillers',
            country: 'USA'
        }
    },
    {
        name: 'Mosina',
        subject: 'C++',
        company:{
            name:'Hacking Blocks',
            country: 'Australia'
        }
    },
    {
        name: 'Kartik',
        subject: 'Data Science',
        company:{
            name:'Online Coding Blocks',
            country: 'UK'
        }
    }
]);

// Find Monu's company name 
db.teachers.find({name:'Monu'}); // This just prints the document in shell

// Convert it to array
db.teachers.find({name:'Monu'}).toArray(); 

// Get the first matching document
db.teachers.find({name:'Monu'}).toArray()[0]; 

// Access embedded 'company' object
db.teachers.find({name:'Monu'}).toArray()[0].company;

// Get the company name
db.teachers.find({name:'Monu'}).toArray()[0].company.name; 


// Better way 
db.teachers.findOne({ name: 'Monu' }).company.name; // This avoids .toArray() overhead
