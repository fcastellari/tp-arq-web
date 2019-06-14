const router = require('express').Router();
// /api/domains
router.use('/domains', require('./domain.routes'));

// /api/owners
router.use('/owners', require('./owner.routes'));

// /api/services
router.use('/services', require('./service.routes'));

module.exports = router;