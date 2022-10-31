const express = require('express'); //import Express 
const cors = require('cors')  // import cors 
const courses = require('./courses.json') // import Course Data


const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send(" Server Running")
})
app.get('/courses', (req, res)=> {
    res.send(courses)
})

app.listen(port, ()=>{
    console.log(`Server Is Running On Port ${port}`);
    
})

module.exports = app;
