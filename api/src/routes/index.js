const { Router } = require('express'); 
const getVideogames = require('./routeVideogames');
const getGenres = require('./routeGenre')
const getPlatforms = require('./routePlatform') 
const cors = require('cors'); // Importa el módulo cors
const backendURL = "https://pi-videogames-amber-zeta.vercel.app/"

const router = Router();

// Configurar CORS solo para las rutas que necesitan peticiones de origen cruzado
const corsOptions = {
  origin: '*', // Ajusta esto para permitir peticiones solo desde dominios específicos
};




// Configurar los routers con la URL de tu backend
router.use(`${backendURL}/videogame`, cors(corsOptions), getVideogames);
router.use(`${backendURL}/genre`, cors(corsOptions), getGenres);
router.use(`${backendURL}/platforms`, cors(corsOptions), getPlatforms);

module.exports = router;

