const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String
    },

    price: {
        type: Number
    },

    category: {
        type: String,
    },

    creator: {
        type: ObjectId,
        ref: "User"
    },
    userRented: [{
        type: ObjectId,
        ref: 'User'
    }]

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Item', itemSchema);