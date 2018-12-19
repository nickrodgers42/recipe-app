"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = require('mongoose');

var bluebird = require('bluebird');

var bcrypt = bluebird.promisifyAll(require('bcrypt'));

var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  // TODO
  // profilePicture: { type: mongoose.SchemaType.ObjectId, ref: 'Photo' },
  createdRecipes: {
    type: [mongoose.SchemaType.ObjectId],
    ref: ''
  }
});
UserSchema.pre('save',
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var salt, hash;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!this.isModified('password') || !this.isNew)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.next = 4;
          return bcrypt.genSaltAsync(10);

        case 4:
          salt = _context.sent;
          _context.next = 7;
          return bcrypt.hash(this.password, salt, null);

        case 7:
          hash = _context.sent;
          this.password = hash;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(uniqueValidator, {
  message: "must be unique"
});
module.exports = UserSchema;