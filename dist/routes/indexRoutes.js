"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.json({
    msg: 'bienvenido a la API 0.1'
  });
});
var _default = router;
exports.default = _default;