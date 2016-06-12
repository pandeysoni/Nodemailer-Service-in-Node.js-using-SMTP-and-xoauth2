
/**
 * Module dependencies
 */
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(router);
//load client folder
//bodyparser to use for request and respnse and set limit in request body data
router.use(bodyParser.urlencoded({ limit: '52428800', extended: true }));
router.use(bodyParser.json({limit: '52428800'}));

// Bootstrap routes
require('./server/config/routes')(router);

app.listen(port);
console.log('Express app started on port ' + port);
