const express = require('express');
const router = express.Router();

/* PS3 Methods */
router.get('/', function(req, res, next) {
    res.render('ps3', {string: "Hello"});
});

router.post('/', function(req, res, next) {
    res.render('ps3c', {'name': req.body.name, 'length': req.body.name.length});
})

module.exports = router;