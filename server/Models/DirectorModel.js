const mongoose = require('mongoose');
const {Schema} = mongoose;

const DirectorSchema = Schema({
    name: {
        type: String,
        required: true
    },
    birth: {
        type: Number
    }
});

const DirectorModel = mongoose.model('Director', DirectorSchema);
module.exports = DirectorModel;
