// app.js (o donde sea que crees app)
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

// aquí el resto de la configuración de app...

module.exports = app;
