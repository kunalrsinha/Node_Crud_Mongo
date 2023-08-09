// This is the root file which is called first to run the apis
const express = require('express')
const bp = require('body-parser');
const app = express();
// Body-parser is a middleware 
app.use(bp.json());
const port = 3000;
// local imports 
const { errorHandles } = require('./middleware')
const connectDB = require('./db');
const userRoutes = require('./controllers/user_controlles');

app.use('/user_list',userRoutes);
app.use(errorHandles);
// Try to connect with mongoose pending

// const userSchema = new connectDB.Schema({
//    name: String,
//    age: Number,
//    email: String,
//    city: String,
// });

// const User = connectDB.model('user', userSchema);
// const newUser = new User({
//    name: 'Anil',
//    age: 44,
//    email: 'anil@gmail.com',
//    city: 'Gurugram'
// });
// newUser.save()
//   .then(doc => console.log(doc))
//   .catch(err => console.error(err));   
app.listen(port , ()=> console.log('Server is up on port : ' + port));