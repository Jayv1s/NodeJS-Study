const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');

app.use(routes);
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.listen(3000);