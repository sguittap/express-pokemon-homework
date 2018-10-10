const express = require('express');
const app = express();
const methodOverride = require('method-override')
const pokemonController = require('./controller/pokemon');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/pokemon', pokemonController);


app.listen(3000, function() {
  console.log("App is running on port: ", 3000);
});

