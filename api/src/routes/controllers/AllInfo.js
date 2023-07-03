const { getApiInfo } = require('./ApiInfo');
const { getDBInfo } = require('./DBInfo');

const getAllVideogames = async () => {
    const apiInfo = await getApiInfo();
    const dBInfo = await getDBInfo();
    const allInfo = apiInfo.concat(dBInfo);
    return allInfo;
};

module.exports = {
    getAllVideogames
};