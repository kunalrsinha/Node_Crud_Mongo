const mongoose = require('mongoose')

module.exports = mongoose.model('User',{
        name: String,
        age: Number,
        email: String,
        city: String,
    })