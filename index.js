const express = require('express'); //import Express 
const cors = require('cors')  // import cors 
const courses = require('./courses.json') // import Course Data
const topCourses = require('./topCourses.json');
const blog = require('./blog.json');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send(" Server Running listen on /courses")
})


app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/limitCourses', (req, res) => {
    res.send(topCourses)
})


app.get('/blog', (req, res) => {
    res.send(blog)
})


app.get('/courses/:id', (req, res) => {
    const iid = req.params.id;
    const result = courses.find(id => id.id == iid)
    res.send(result)
})


app.get('/checkout/:id', (req, res) => {
    const iid = req.params.id;
    // console.log(query);
    const result = courses.find(id => id.id == iid)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Server Is Running On Port ${port}`);

})

module.exports = app;
