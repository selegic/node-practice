const express=require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'));
app.use(expressLayouts)
app.set('layout','./layouts/layout');

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let para={
        name:'samrat',
        id:1
    }
    res.render('index',para);
})
app.get('/about', (req, res) => {
    res.render('about',{layout:'./layouts/sidebar'});
})
app.listen(port, () => console.log(`App listening on port ${port}`))