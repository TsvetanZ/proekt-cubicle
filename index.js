const express = require('express');
const expressConfig = require('./config/express');
const rotesConfig = require('./config/routes');
const databaseConfig = require('./config/database');


async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    rotesConfig(app);
    


    app.listen(3000, () => {console.log('Server listining for port 3000...')});
}

start();



