/*const express = require ('express'); // This is es6 syntax can use the updated version as well
const dotenv = require ('dotenv').config();
const cors = require ('cors');



const app = express() ;

app.use(cors({
    origin: 'http://localhost:5174',  // Your frontend URL
    credentials: true  // Allow cookies, authorization headers
}));

app.use('/',require('./Routes/authRoute.js'));



const port = 8000 ;
app.listen(port, () => console.log (`server is running on ${port}`));
*/

/*const express = require('express'); 
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const mongoose = require('mongoose')



// Database connection
mongoose.connect(process.env.MONGO_URL);

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',  // Your frontend URL
    credentials: true  // Allow cookies, authorization headers
}));
app.use(express.json()); // ✅ Add this to parse JSON request bodies

// Routes
app.use('/', require('./Routes/authRoute.js'));  // ✅ Fixed

const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}`)); */

const express = require('express'); 
require('dotenv').config(); // No need to assign to a variable
const cors = require('cors');
const mongoose = require('mongoose'); // ✅ Correct way to import
const cookieParser = require('cookie-parser');

const app = express();

// ✅ Database connection
//console.log("MONGO_URL from .env:", process.env.MONGO_URL);

/*mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err)); */

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
  credentials: true
}));
app.use(express.json()); // To parse JSON bodies
// below 2 lines of code are for json web token
//However json web token would be created in the authController
app.use(cookieParser()); // initialize cookie-parser ,this would allow cookies to go from one host to another
app.use(express.urlencoded ({extended:false}));

// ✅ Routes
app.use('/', require('./Routes/authRoute.js'));

const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));

