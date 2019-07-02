const error = require('restify-errors');

module.exports = server => {
    server.get('/routers', (req, res, next) => {
        res.send({ msg: 'test' });
        next();
    });
}