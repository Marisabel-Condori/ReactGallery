"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _indexRoutes = _interopRequireDefault(require("./routes/indexRoutes"));

var _imagesRoutes = _interopRequireDefault(require("./routes/imagesRoutes"));

require("./database");

var app = (0, _express.default)(); //hacer correr en el local host 4000

app.set('port', process.env.PORT || 4000); //app.get('/', (req, res) => res.send('hello world...'))

app.use((0, _expressFileupload.default)({
  tempFileDir: '/temp'
}));
app.use(_indexRoutes.default);
app.use(_imagesRoutes.default);
app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));