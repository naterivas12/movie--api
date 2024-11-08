
const { response } = require('express')
const axios = require('axios');

const listCharactersGet = async (req, res = response) => {
  const malId = req.params.mal_id;

  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${malId}/characters`);
    const charactersData = response.data;

    const filteredCharactersData = charactersData.data.map(
      (({ character:{mal_id}, character:{images: { jpg: { image_url } } }, character:{name} }) => ({
      mal_id,
      image_url,
      name,})
      )
    )
    res.json(filteredCharactersData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de personajes' });
  }
}

module.exports = {
  listCharactersGet
}