// One to One Mapping - Links one document in a collection to exactly one document in another collection
// 1. using embedded documents

db.createCollection('teachers2');

db.teachers2.insertMany([
    {name: 'Kartik', subject: 'Web development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
])

db.createCollection('products2');

db.products2.insertMany([
    {name: 'Macbook', features:['Touchpad','i-6'], price:100},
    {name: 'HP', features:['4K Screen','i-5'], price:30},
    {name: 'Dell', features:['SSD','i-9'], price:50},
    {name: 'Lenovo', features:['Antiglare','i-7'], price:10}
])


db.teachers2.updateOne(
    {
        _id: ObjectId('6852aab19d7be0c04f50eb6b')
    },
    {
        $set:{
            laptop:{name: 'Macbook', features:['Touchpad','i-6'], price:100}
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852aab19d7be0c04f50eb6c')
    },
    {
        $set:{
            laptop:{name: 'HP', features:['4K Screen','i-5'], price:30}
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852aab19d7be0c04f50eb6d')
    },
    {
        $set:{
            laptop:{name: 'Dell', features:['SSD','i-9'], price:50}
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852aab19d7be0c04f50eb6e')
    },
    {
        $set:{
            laptop:{name: 'Lenovo', features:['Antiglare','i-7'], price:10}
        }
    }
)

// Fetching data from embedded docs
db.teachers2.findOne({name:'Kartik'}).laptop.name;


// 2. using two different collections
// Here, we reference the product by its ObjectId (like a foreign key).

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb73')
    },
    {
        $set:{
            productID: ObjectId('6852b1d89d7be0c04f50eb77')
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb74')
    },
    {
        $set:{
            productID: ObjectId('6852b1d89d7be0c04f50eb78')
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb75')
    },
    {
        $set:{
            productID: ObjectId('6852b1d89d7be0c04f50eb79')
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb76')
    },
    {
        $set:{
            productID: ObjectId('6852b1d89d7be0c04f50eb7a')
        }
    }
)

// Fetching data from two collections using $lookup
db.teachers2.aggregate({
    $lookup:{
        from: 'products2',
        localField: 'productID',
        foreignField: '_id',
        as: 'productDetails'
    }
})
