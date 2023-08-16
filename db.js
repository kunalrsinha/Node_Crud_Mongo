// Need to connect with mongoose package
const mongoose = require('mongoose');
const dbUri = "mongodb+srv://admin:9454@cluster0.jcz0xk4.mongodb.net/user_db?retryWrites=true&w=majority"

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;