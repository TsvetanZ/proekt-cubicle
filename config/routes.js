const accessoryController = require('../controller/accessoryController');
const attachController = require('../controller/attachController');
const authController = require('../controller/authController');
const createController = require('../controller/createController');
const detailController = require('../controller/detailsController');
const errController = require('../controller/errController');
const homeController = require('../controller/homeController');
const { hasUser } = require('../middlewares/guard');



module.exports = (app) => {
    app.use(homeController);
    app.use('/create', hasUser(), createController);
    app.use('/details',detailController);
    app.use('/details', hasUser(), attachController);
    app.use('/create/accessory', accessoryController)
    app.use('/auth', authController);


    app.all('*', errController);
}