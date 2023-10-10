const router = require('express').Router();
const { celebrate } = require('celebrate');
const { triangulationDataValidation } = require('../middlewares/validationRules');
const { sendTriangulation } = require('../controllers/triangulation');

router.post('/', celebrate(triangulationDataValidation), sendTriangulation);

module.exports = router;
