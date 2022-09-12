const mongoose = require('mongoose');
const {Schema} = mongoose;

const MovieSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    year: {
        type: Number
    },
    directorId: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
});

const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = MovieModel;
