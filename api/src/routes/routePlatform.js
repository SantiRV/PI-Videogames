const Router = require('express');
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const router = Router();
const { API_KEY } = process.env;

router.get('/', async (req, res) => {
    try {
        const platformApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const platformas = platformApi.data.results;
        res.json(platformas);
    } catch (error) {
        res.send(error)
    }
});

// Filter by platforms

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const gameByPlatforms = await axios.get(`https://api.rawg.io/api/games?platforms=${id}&key=${API_KEY}`);

    const info = gameByPlatforms.data.results;

    const mapeo = info?.map((v) => {
        const plataformas = v.platforms.map((g) => g.platform);
        return {
            id: v.id,
            name: v.name,
            img: v.background_image,
            description: v.description,
            released: v.released,
            rating: v.rating,
            platforms: plataformas,
            genres: v.genres,
        }
    });
    return res.json(mapeo);
});

module.exports = router;