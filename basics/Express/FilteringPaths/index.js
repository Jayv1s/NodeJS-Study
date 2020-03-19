const express = require('express');
const app = express();
const usersRoutes = require('./usersRoutes');

// /users/lists || /users/products
app.use('/users', usersRoutes); //I can filter paths in general way

app.listen(3000);