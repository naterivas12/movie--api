
const { response } = require('express')
const axios = require('axios');

const listMovieGet = async(req, res) => {
  try{
    const response = await axios.get('https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie');
    const animeList = response.data;
    
    const filteredData  = animeList.data.map(anime=>{
      const {mal_id,images:{jpg:{image_url}},title,background} = anime;

      return{
        mal_id,
        images: image_url,
        title,
        background
      }
    })
    
    res.json(filteredData);
  }catch(error){
    console.error(error);
    res.status(500).json({error:'error al obtener datos de la API'})
  }
}

module.exports = {
  listMovieGet
}