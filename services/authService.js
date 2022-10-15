const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(username, password){
    //check if username is taken
    const existing = await User.findOne({username: { $regex: new RegExp(username) , $options: 'i'}}); // options with 'i' mean keyIntensive
    if (existing) {
        throw new Error('Username is taken')

    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 - How time is shake normal beetwen 9-10

    // create and save  user
    const user = await User.create({
        username,
        hashedPassword
    });
    // return user data
    return {
        username,
        roles: user.roles
    }
}

async function login(username, password) {
    const user = await User.findOne({username: { $regex: new RegExp(username) , $options: 'i'}});
    if(!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match) {
        throw new Error('Incorrect username or password');
    }

    return {
        username: user.username,
        rolea: user.roles
    };


    //return new Promise((res, rej) => {
    //    if(username.toLowerCase() == 'peter'&& password == '123'){
    //        res({
    //            _id: '29vhjvhjv1515',
    //            username: 'Peter',
    //            roles: ['user']
    //        });
    //    } else {
    //        rej(new Error('Incorrect username or password'));
    //    }
    //});
}

module.exports = {
    login,
    register
};
