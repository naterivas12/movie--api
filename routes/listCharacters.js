const { Router } =  require('express');
const { listCharactersGet } = require('../controllers/listCharacters');
const router = Router();


router.get('/:mal_id', listCharactersGet);

module.exports = router