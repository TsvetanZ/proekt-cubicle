const authController = require ("express").Router();


authController.get('/login', (req,res)=> {
    const payload = {
        _id:'635ghgvh552jhgfd',
        username: 'peter', 
        roles: ['user']
    };
    const token = jwt.sign(payload, jwtSecret, {expiresIn: '4h'}); //next time expirins 4h
    res.cookie('jwt', token);
    res.send("Here is your token")
});




module.exports = authController;