"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _db = require("../data/db");

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("@babel/polyfill");

var app = (0, _express.default)();
var MongoStore = (0, _connectMongo.default)(_expressSession.default);
var port = 3004;
_mongoose.default.Promise = _bluebird.default;
(0, _db.connect)({
  promiseLibrary: _bluebird.default,
  useNewUrlParser: true
}).then(function () {
  return console.log("Database connection successful");
}).catch(function (err) {
  return console.log(err);
});
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: "false"
}));
app.use((0, _expressSession.default)({
  secret: ",?DT|f@uMG@OM$f9rm1n#>{|Y-'m_feToXSIq.jLAb_#3cnr_0iJfx^J`ItL4E/",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: "mongodb://localhost/recipe-app"
  })
}));

require("./controllers")(app);

app.listen(port, function () {
  console.log("API is listening on port " + port);
});
module.exports = app;