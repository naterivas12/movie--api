const { Router } =  require('express');
const axios = require('axios');
const { charactersGet } = require('../controllers/character');
const router = Router();


router.get('/:character_mal_id', charactersGet );



module.exports = router