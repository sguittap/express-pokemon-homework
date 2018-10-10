const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

//routes
router.get('/', (req, res)=>{
    res.render('index.ejs',{pokemon: Pokemon})
})
router.delete('/:id/delete', (req, res) => {
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

router.get('/:id/edit', (req, res)=>{
    res.render('edit.ejs',{
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    })    
});

router.put('/:id', (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon')
})
router.get('/:index/show', (req, res)=>{
    res.render('show.ejs',{
        pokemon: Pokemon[req.params.index],
        i: req.params.index
    })
})
module.exports = router;