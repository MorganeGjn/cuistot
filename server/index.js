/*
 * \file index.js
 * \brief Start the server Apollo
 * \date 16 juin 2017
 * \author Cuistot du coin
 */

/* eslint consistent-return:0 */

// const postgraphql = require('postgraphql').postgraphql;
const express = require('express');
const logger = require('./logger');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const schema = require('./schema');
const Account = require('./models').UserAccount;

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
  ? require('ngrok')
  : false;
const resolve = require('path').resolve;
const app = express();
const passport = require('passport');
require('./passport');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// postgraphql
// const config = {
//   user: 'jeremy',
//   database: 'cuistot',
//   password: 'dev',
//   host: 'localhost',
//   port: 5432,
// };
//
// const optionGraphQL = { graphiql: true };
// app.use(postgraphql(config, optionGraphQL));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: 'ws://localhost:3000/subscriptions',
  })
);

  app.use(passport.initialize());
  app.use(passport.session());


  passport.serializeUser(function(user, done) {
        done(null, user);
  });

  passport.deserializeUser(function(user, done) {
        done(null, user);
  });

const server = createServer(app);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
server.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // eslint-disable-next-line
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server,
      path: '/subscriptions',
    }
  );
  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

app.post("/login"
  ,passport.authenticate('local', { session: false }),
  function(req, res) {
    res.send(req.user);
  });
