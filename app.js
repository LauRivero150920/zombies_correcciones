const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//! rutas
const rutasZombies = require('./routes/zombies-routes');

const path = require('path');

//! View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//! rutas
app.use('/zombies', rutasZombies);

app.use((request, response, next) => {
    response.status(404).render('404');
});

app.listen(3000);