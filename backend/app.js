const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');
const errorsHandler = require('./middlewares/errorsHandler');
const corsHandler = require('./middlewares/corsHandler')
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/rateLimiter');
require('dotenv').config();

const { PORT = 3000 } = process.env;

const app = express();

app.use(limiter);
app.use(helmet());
app.use(corsHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use('/', routes);

app.use(errorLogger);
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
