const express = require('express');
const hbs = require ('express-handlebars').create({
    extname: 'hbs'
});


const app = express();

app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true})); //this is post zaqwki da parse(obrabotim) data (dani).
app.use('/static', express.static('static')); // whith this where to be take static data(css, img and  etc.) and end  where from folder

app.get('/', (req,res) =>{
    res.render('home')
})


app.listen(3000, () => {console.log('Server listining for port 3000...')});