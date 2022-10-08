const mongoose = require('mongoose');

const connStr = 'mongodb://localhost:27017/cubeDB';


module.exports = async (app) => {
    try {
          await mongoose.connect(connStr, {
            useUnifiedTopology: true,
            useNewUrlParser: true        
        })
        console.log('Database connected')
    } catch (error) {
        console.error("Error initializing database");
        console.error(err.message);
        process.exit(1);
        
    }
  
}