const { Videogame, Genre, Platform } = require('../../db');

const getDBInfo = async () => {
    return await Videogame.findAll({
        include: [Genre, Platform],
    });
};

module.exports = {
    getDBInfo
};