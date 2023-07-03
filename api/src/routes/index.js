const { Router } = require('express'); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require('./routeVideogames');
const getGenres = require('./routeGenre')
const getPlatforms = require('./routePlatform') 


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogame', getVideogames);
router.use('/genre', getGenres);
router.use('/platforms', getPlatforms);

module.exports = router;
