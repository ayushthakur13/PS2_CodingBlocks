// Update operation

// To update the data we can use:
// 1. updateOne() -
// 2. updateMany() - 

// Update the price of laptop which has feature as touchpad
db.products.updateOne(
    {
        features:'Touchpad'
    },
    {
        $set:{price:120}
    }
);

// Adding price to other items 
db.products.updateMany(
    {
        name:{
            $ne:'Laptop'
        }
    },
    {
        $set:{
            price:10
        }
    }
)

// $ne means not equal to



// Delete operation

// To update the data we can use:
// 1. deleteOne() - selected element would be deleted and rest remains untouched
// 2. deleteMany() - this will delete all items inside collection but not the collection

db.characters.deleteOne(
    {name:'Gandalf'}
);

db.characters.drop(); // this will delete the collection
