"use strict";

var _index = require("../../data/models/index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

module.exports = function (server) {
  server.get("/api/recipe/:recipeId", getRecipe);
  server.post("/api/recipe", createRecipe);
};

function getRecipe(_x, _x2, _x3) {
  return _getRecipe.apply(this, arguments);
}

function _getRecipe() {
  _getRecipe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var recipeId, models, recipe;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            recipeId = req.params.recipeId;
            _context.next = 4;
            return (0, _index.loadModels)();

          case 4:
            models = _context.sent;
            _context.next = 7;
            return models.recipe.findById(recipeId);

          case 7:
            recipe = _context.sent;

            if (recipe) {
              _context.next = 11;
              break;
            }

            res.status(404).send({
              error: "Recipe with ID ".concat(recipeId, " not found ")
            });
            return _context.abrupt("return", next());

          case 11:
            res.json(recipe);
            next();
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            res.status(500).send({
              error: _context.t0.message
            });
            next(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 15]]);
  }));
  return _getRecipe.apply(this, arguments);
}

function createRecipe(_x4, _x5, _x6) {
  return _createRecipe.apply(this, arguments);
}

function _createRecipe() {
  _createRecipe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var models, newRecipe;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _index.loadModels)();

          case 3:
            models = _context2.sent;
            newRecipe = new models.recipe({
              title: req.body.title,
              ingredients: req.body.ingredients,
              directions: req.body.directions
            });
            _context2.next = 7;
            return newRecipe.save();

          case 7:
            res.json(newRecipe);
            next();
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send({
              error: _context2.t0.message
            });
            next(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 11]]);
  }));
  return _createRecipe.apply(this, arguments);
}