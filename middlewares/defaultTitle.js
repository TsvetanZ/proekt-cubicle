module.exports = (defaultTitele) => (req, res, next) => {
    res.locals.title = defaultTitele;
    next();
}