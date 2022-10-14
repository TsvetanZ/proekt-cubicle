const accessoryController = require('../controller/accessoryController');
const attachController = require('../controller/attachController');
const authController = require('../controller/authController');
const createController = require('../controller/createController');
const detailController = require('../controller/detailsController');
const errController = require('../controller/errController');
const homeController = require('../controller/homeController');



module.exports = (app) => {
    app.use(homeController);
    app.use('/create',createController);
    app.use('/details',detailController);
    app.use('/details',attachController);
    app.use('/create/accessory', accessoryController)
    app.use('/auth', authController);


    app.all('*', errController);
}