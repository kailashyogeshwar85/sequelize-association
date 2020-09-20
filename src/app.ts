import * as express from "express";
import * as bodyParser from "body-parser";
require("dotenv").config();

const cors = require("cors");

// Create Express server
const app = express();
/**
 * CORS Setup start
 * Add Endpoints to be whitelisted in @var whitelist
 */
const whitelist = ["http://whitelist1.com", "http://whitelist2.com"];

const corsOptionsDelegate = (req: any, callback: any) => {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// default express error handler

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(cors(corsOptionsDelegate));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Linking App routes file:
require("./routes/routes")(app);
app.use(errorHandler);

export default app;
