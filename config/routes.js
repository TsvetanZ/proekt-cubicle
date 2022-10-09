const createController = require('../controller/createController');
const detailController = require('../controller/detailsController');
const errController = require('../controller/errController');
const homeController = require('../controller/homeController');


module.exports = (app) => {
    app.use(homeController);
    app.use('/create',createController);
    app.use('/details',detailController);
    app.all('*', errController);
}