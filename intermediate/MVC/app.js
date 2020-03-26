const express = require('express');

const app = express();

//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res) => {
    res.status(404).send('<h1> Page not found! </h1>'); 
});
app.listen(3001);