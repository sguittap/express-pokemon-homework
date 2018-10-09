const express = require('express');
const app = express();
const pokemon = require('./modals/pokemon')

app.get('/pokemon', (req, res)=>{
    res.send(pokemon)
})


const port = 3000;
app.listen(port, function() {
  console.log("App is running on port: ", port);
});