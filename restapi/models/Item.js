const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const itemSchema = new Schema({

    description: {
        type: String,
        required: true,
    },

    creator: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Item', itemSchema);