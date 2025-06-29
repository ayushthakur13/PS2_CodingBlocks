const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);
