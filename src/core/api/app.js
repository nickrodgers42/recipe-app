"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("@babel/polyfill");

var app = (0, _express.default)();
var port = 3004;
app.listen(port, function () {
  console.log("Server is running on port " + port);
});