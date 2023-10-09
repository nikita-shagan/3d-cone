module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  if (statusCode === 500) {
    res.status(statusCode).send({ message: 'Internal server error' });
  } else {
    res.status(statusCode).send({ message });
  }
  next();
};
