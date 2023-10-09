const router = require('express').Router();
const { NotFoundError } = require('../errors/NotFoundError');

const triangulationRouter = require('./triangulation');

router.use('/triangulation', triangulationRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Endpoint does not exist'));
});

module.exports = router;
