/**
 * 1. Create an express server
 * 2. connect to mongodb
 * 3. initialize express
 * 4. initialize express middleware
 * 5. create a simple get request
 * 6. inject our routes
 * 7. listen to our app connection
 */

const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); //allows us to use the environmental variables in .env
const { PORT } = process.env;

//connect to db
connectDB();

//initialize express
const app = express();

//initialize express middleware
app.use(express.json({ extended: false }));

//create a basic express route
app.get('/', (req, res) => res.json({ message: 'Welcome to Tutoring App' }));

//PORT
const port = process.env.PORT || PORT;

//listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
