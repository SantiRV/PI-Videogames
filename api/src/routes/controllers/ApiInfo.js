const axios = require('axios');
const { API_KEY } = process.env

const getApiInfo = async () => {
  var games = [];
  const apiUrl1 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiUrl2 = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2`
  );
  const apiUrl3 = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=3`
  );
  const apiUrl4 = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=4`
  );
  const apiUrl5 = axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=5`
  );

  return Promise.all([apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5])
    .then((resolve) => {
      let [apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5] = resolve;

      games = [
        ...apiUrl1.data.results,
        ...apiUrl2.data.results,
        ...apiUrl3.data.results,
        ...apiUrl4.data.results,
        ...apiUrl5.data.results,
      ].map((v) => {
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
        };
      });
      return games;
    })
    .catch((err) => console.log(err));
};

module.exports = {
    getApiInfo
};