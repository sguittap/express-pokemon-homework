const express = require('express');
const app = express();
const pokemon = require('./modals/pokemon')

app.get('/pokemon/:index', (req, res)=>{
    res.render('index.ejs',{
        pokemon: pokemon
    })
})


const port = 3000;
app.listen(port, function() {
  console.log("App is running on port: ", port);
});