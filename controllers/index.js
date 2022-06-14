// router setup
const router = require('express').Router();

// connect to api routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// api path
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// invalid route requests
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
