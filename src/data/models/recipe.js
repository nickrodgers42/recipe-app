const mongoose = require('mongoose');

let uniqueValidator = require('mongoose-unique-validator');

let RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    lastEditDate: { type: Date, default: Date.now }, 
    author: mongoose.SchemaType.ObjectId, ref: 'User',
    yield: Number,
    description: { type: String },
    ingredients: { type: [String], required: true },
    directions: { type: [String], required: true },
    // TODO
    // photos: { type: [mongoose.SchemaType.ObjectId], ref: 'Photo' },
    notes: { type: [String] },
    reviews: { type: [mongoose.SchemaType.ObjectId], ref: 'Review'},
    // TODO
    // likes: { type}
    public: { type: Boolean, default: true},
});

module.exports = RecipeSchema;