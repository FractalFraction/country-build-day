const db = require('../../models');
const Country = db['Country'];

const createCountries = () => {

  Country.bulkCreate([{
    name: 'France',
    isoname: 'fr',
    population: 68200000,
    landarea: 643427
  },
      {
    name: 'Japan',
    isoname: 'jp',
    population: 125960000,
    landarea: 377975
  },
      {
    name: 'United States',
    isoname: 'us',
    population: 328239523,
    landarea: 9147590
  },
    {
      name: 'United Kingdom',
      isoname: 'gb',
      population: 67886004, 
      landarea: 248532
  }])

}

module.exports = createCountries