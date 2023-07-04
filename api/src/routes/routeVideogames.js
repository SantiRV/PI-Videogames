const Router = require('express');
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');
const { getAllVideogames } = require('./controllers/AllInfo');
const router = Router();
const { API_KEY } = process.env;

router.get('/',async (req, res) => {
    const name = req.query.name;
    let allVideogames = await getAllVideogames();
    if (name) {
        let videogameName = await allVideogames.filter((game) => 
        game.name.toLowerCase().includes(name.toLowerCase()));
        videogameName.length ?
        res.status(200).send(videogameName) :
        res.status(404).send("Game Not Found");
    } else {
        res.status(200).send(allVideogames);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length < 10) {
            const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            return res.json(game.data);
        }
        if (id.length > 10) {
            const dBGame = await Videogame.findOne({
                where: {
                    id: id,
                },
                include: [Genre, Platform],
            });
            return res.json(dBGame);
        }
    } catch (error) {
        console.log(error);
        res.status(404).send("Not Found for id")
    }
});

router.post('/', async (req,res) => {
    let { name, description, released, rating, platforms, genres } = req.body;
    let createVideogame = await Videogame.create({
        name,
        description,
        released,
        rating,
    });
    let dBGenre = await Genre.findAll({
        where: {name: genres},
    });
    let dBPlatform = await Platform.findAll({
        where: {name: platforms}
    });
    createVideogame.addGenres(dBGenre);
    createVideogame.addPlatforms(dBPlatform);
    res.status(200).send(createVideogame);
});

module.exports = router;