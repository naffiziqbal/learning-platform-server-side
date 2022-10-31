const express = require('express'); //import Express 
const cors = require('cors')  // import cors 
const courses = require('./courses.json') // import Course Data


const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
