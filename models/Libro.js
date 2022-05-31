const {Schema} = require('mongoose')
const mongoose = require('mongoose');

const LibroSchema = Schema({
    name:{
        type: String
    },
    author:{
        type: String
    },
    year:{
        type: String
    },
    keywords:{
        type: String
    },
    editorial:{
        type: String
    }
})

module.exports = mongoose.model('Libro', LibroSchema)