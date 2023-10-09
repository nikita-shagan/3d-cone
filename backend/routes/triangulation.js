const router = require('express').Router();
const { sendTriangulation } = require('../controllers/triangulation');

router.post('/', sendTriangulation);

module.exports = router;
