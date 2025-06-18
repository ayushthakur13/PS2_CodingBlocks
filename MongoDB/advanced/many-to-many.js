// many to many -  Each document links to multiple documents in another collection and vice versa via a bridge collection.
// Ex- An actor can work in many shows, and a show can have many actors.

db.createCollection('actors');
db.actors.insertMany([
    {name:"Sheldon"},
    {name:'Penny'}
])

db.createCollection('shows');
db.shows.insertMany([
    {name:'Big Bang Theory'},
    {name:'Young Sheldon'}
])

// To have a many to many relationship, we need to create a collection that link the collections
db.createCollection('actors_shows');

// actorID: ObjectId('6852c0e59d7be0c04f50eb7b'), ObjectId('6852c0e59d7be0c04f50eb7c')
// showId: ObjectId('6852c0f79d7be0c04f50eb7d'), ObjectId('6852c0f79d7be0c04f50eb7e')

db.actors_shows.insertMany([
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7b'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7d')
    },
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7b'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7e')
    },
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7c'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7d')
    }
])

// This means:
// Sheldon is in both shows
// Penny is only in Big Bang Theory


// Fetch data
db.actors_shows.aggregate(
    {
        $lookup:{
            from: 'actors',
            localField: 'actorID',
            foreignField: '_id',
            as: 'actorInfo'
        }
    },
    {
        $lookup:{
            from: 'shows',
            localField: 'showId',
            foreignField: '_id',
            as: 'showInfo'
        }
    }
)
