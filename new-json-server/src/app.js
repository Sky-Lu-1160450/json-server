const path = require('path');
const jsonServer = require('json-server');
const TokenService = require('./service/token')

// Importing router and database configuration
const router = require('./router');  // This includes the restaurant routes
const db = require('./db')();

const server = jsonServer.create();

// Applying middlewares, including serving static files from a 'public' directory
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../public')
});

// Add this before the router configuration in app.js
server.get('/', (req, res) => {
  res.send('Hi Sky, Welcome to the JSON Server!');
});

server.use(middlewares);
server.use(jsonServer.bodyParser); // To parse incoming request bodies


server.use((req, res, next) => {
  if (TokenService.isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
})  








server.use((req, res, next) => {
  const json = res.json.bind(res);

  res.success = (data) => {
    return json({
      code: 0,
      msg: 'Request successfully',
      data
    });
  };

  res.fail = (msg, code = -1, data) => {
    return json({
      code,
      msg,
      data
    });
  };

  next();
});

// Apply custom router configuration
router(server);  // Ensure the custom routes, including restaurants, are applied

// Setting up the JSON Server router with your database
const jsonRouter = jsonServer.router(db);
server.use((req, res, next) => {
  setTimeout(next, 1000); // Simulate delay
});
server.use('/api', jsonRouter);  // Set up /api route

// Starting the server on port 8000
server.listen(8000, () => {
  console.log('JSON Server is running at http://localhost:8000');
});
