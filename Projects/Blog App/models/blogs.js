const mongoose = require('mongoose');

// 1. Schema
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    actor: { type: Schema.Types.ObjectId, ref: 'Actor'},
    description: String
})

// 2. Associate schema with a model
module.exports = mongoose.model('Blog', blogSchema);
