const { Router } =  require('express');
const axios = require('axios');
const { listMovieGet } = require('../controllers/listMovies');
const router = Router();


router.get('/', listMovieGet )


module.exports = router