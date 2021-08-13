const db = require('../../models');
const Country = db['Country'];

const truncateCountries = () => {

    Country.destroy({
      truncate: true, cascade:true
    })

}

module.exports = truncateCountries