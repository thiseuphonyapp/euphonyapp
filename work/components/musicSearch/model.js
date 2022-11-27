const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new Schema({
    category: String,
    search: {
        type: String,
        required: true,
    }
});