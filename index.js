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
app.listen(port , ()=> console.log('Server is up on port : ' + port));