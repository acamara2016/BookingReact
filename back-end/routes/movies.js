var express = require('express');
var router = express.Router();
var movieModel = require('../models/movie');


router.get('/',(req, res)=>{
    
    movieModel.find({type : "movie"})
    .limit(500)
    .exec()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})


router.get('/year/:year',(req, res)=>{
    console.log(req.params.year)
    movieModel.find({year : req.params.year})
    .exec()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})

router.get('/genre/:genres',(req, res)=>{
    console.log(req.params.genres)
    movieModel.
    movieModel.find({genres : req.params.genres})
    .exec()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})
router.get('/directors/:directorName',(req, res)=>{
    console.log(req.params.directorID)
    movieModel.find({directors : req.params.directorName})
    .exec()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})
router.get('/languages/:language',(req, res)=>{
    console.log(req.params.language)
    movieModel.find({languages : req.params.language})
    .exec()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{console.log(err);})
})



module.exports = router;