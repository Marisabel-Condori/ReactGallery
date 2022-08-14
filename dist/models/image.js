"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

// new Schema: para identificar que estamos usando en la base de datos
// no es un esquema fijo si no una manera de validar antes de guardarse en mongodb
// como la definicion de una tabla.......
var ImageSchema = new _mongoose.Schema({
  title: String,
  key: String,
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  // guarda los datos de cuando fue creado el archivo y 
  //cuando fue actualizado por ultima vez
  versionKey: false
});

var _default = (0, _mongoose.model)('Image', ImageSchema);

exports.default = _default;