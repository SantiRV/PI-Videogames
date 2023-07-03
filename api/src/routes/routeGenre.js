const Router = require('express');
const axios = require('axios');
const { Genre } = require('../db');
const router = Router();
const { API_KEY } = process.env;

router.get('/', async (req, res) => {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = genresApi.data.results;
    genres.forEach(async (g) => {
        await Genre.findOrCreate({
            where: {
                name: g.name,
            }
        })
    })
    const allGenre = await  Genre.findAll();
    res.status(200).send(allGenre);
});

// Flter by Genre

router.get('/:name', async (req, res) => {
    const {name} = req.params;
    const gamesByGenre = await axios.get(`https://api.rawg.io/api/games?genres=${name}&key=${API_KEY}`);

    const info = gamesByGenre.data.results;

    const mapeo = info?.map((g) => {
        const platformas = g.platforms.map((v) => v.platforms);
        return {
            id: g.id,
            name: g.name,
            img: g.background_image,
            description: g.description,
            released: g.released,
            platforms: platformas,
            genres: g.genres,
        }
    });
    return res.json(mapeo)
});

module.exports = router;