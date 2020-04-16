const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); //I'm telling to Node that, my global template engine is EJS
app.set('views', 'views'); // This line tell to Node where my views are. The default is views, so I don't needed to do that, but if it's in a different folder, I need to tell to node.

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));//middleware para arquivos estaticos (css por exemplo)

app.use('/admin', adminRoutes.routes); // since I change the way I'm importing, I need to change the way I recieve
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' }); //passing the file that I want to open (404) and page title to set then dynamically
});

app.listen(3000);
