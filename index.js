const express = require('express');
const createController = require('./controller/createController');
const errController = require('./controller/errController');
const homeController = require('./controller/homeController');
const defaultTitle = require('./middlewares/defaultTitle');
const hbs = require ('express-handlebars').create({
    extname: 'hbs'
});


const app = express();

app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true})); //this is post zaqwki da parse(obrabotim) data (dani). това middleware
app.use('/static', express.static('static')); // whith this where to be take static data(css, img and  etc.) and end  where from folder

app.use(defaultTitle('Proekt Cube')); // по този начин съсздваме ddefault title;

/* app.get('/', (req,res) =>{ 
    res.render('home')
}) */ // за опитване да ли приложението работи.  For try wether is app work/ to test if the app works.

app.use(homeController);
app.use(createController);
app.all('*', errController);


app.listen(3000, () => {console.log('Server listining for port 3000...')});