const { Router } = require('express'); 
const getVideogames = require('./routeVideogames');
const getGenres = require('./routeGenre')
const getPlatforms = require('./routePlatform') 


const router = Router();






// Configurar los routers con la URL de tu backend
router.use('/videogame', getVideogames);
router.use('/genre', getGenres);
router.use('/platforms', getPlatforms);

module.exports = router;

