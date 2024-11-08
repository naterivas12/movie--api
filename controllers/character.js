
const { response } = require('express')
const axios = require('axios');

const charactersGet = async (req, res) => {
  const characterMalId = req.params.character_mal_id;

  const apiUrl = `https://api.jikan.moe/v4/characters/${characterMalId}/full`;

  try {
    const response = await axios.get(apiUrl);
    const characterFullData = response.data;

    const {images: { jpg: { image_url } },name,name_kanji,about } = characterFullData.data

    res.json({
      image_url,
      name,
      name_kanji,
      about
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos del personaje' });
  }
}

module.exports = {
  charactersGet
}