const express = require('express');
const app = express();
const pokemon = require('./modals/pokemon')

app.get('/pokemon', (req, res)=>{
    res.send(pokemon)
})

app.get('/pokemon/index', (req, res)=>{
    res.render('index.ejs',{
        pokemon: pokemon
    })
})

app.get('/pokemon/:id',  (req, res)=>{
    res.render('show.ejs',{
        pokemon: pokemon[req.params.id]
    })
})


const port = 3000;
app.listen(port, function() {
  console.log("App is running on port: ", port);
});