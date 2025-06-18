// one to many - One document is linked to multiple related documents
// Ex- one teacher can have more than 1 laptop

// first delete old one to one mapping
db.teachers2.updateMany({},{$unset:{productID:1}}); // this will remove productID from teachers2

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb73')
    },
    {
        $set:{
            product_IDs: [
                ObjectId('6852b1d89d7be0c04f50eb77'),
                ObjectId('6852b1d89d7be0c04f50eb78')
            ]
        }
    }
)

db.teachers2.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb74')
    },
    {
        $set:{
            product_IDs: [
                ObjectId('6852b1d89d7be0c04f50eb79'),
                ObjectId('6852b1d89d7be0c04f50eb7a')
            ]
        }
    }
)


// We can use embedded docs or referenced data for one to many mapping according to our use cases.
// 1. embedded - If data is time-sensitive or personal, EMBED it.
// 2. referenced - Keep up with latest data/version OR Global data (products, locations)


// fetch details 
db.teachers2.aggregate({
    $lookup:{
        from: 'products2',
        localField: 'product_IDs',
        foreignField: '_id',
        as: 'productDetails'
    }
})

