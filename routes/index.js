// router setup
const router = require('express').Router();

// connect to api routes
const apiRoutes = require('./api');

// api path
router.use('/api', apiRoutes);


// invalid route requests
router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;