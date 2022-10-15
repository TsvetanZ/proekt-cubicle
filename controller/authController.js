const { login } = require('../services/authService');

const authController = require ("express").Router();


authController.get('/login', (req,res)=> {
   // const payload = {
   //     _id:'635ghgvh552jhgfd',
   //     username: 'peter', 
   //     roles: ['user']
   // };
   // const token = jwt.sign(payload, jwtSecret, {expiresIn: '4h'}); //next time expirins 4h
   // res.cookie('jwt', token);
    res.render('loginPage', {
        title:'Login Page'
    })
});

authController.post('/login', async (req, res) =>{
    const result = await login(req.body.username, req.body.password);
    const token = req.signJwt(result);
    res.cookie('jwt', token);
    res.redirect('/');
})





module.exports = authController;