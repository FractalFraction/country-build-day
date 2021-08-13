const db = require('../../../models');
const Country = db['Country'];

const countryHandler = async (req,res,next) => {

  const countries = await Country.findAll({
    attributes: ['name', 'population', 'landarea']
  });

  req.app.locals.countries = countries;
  next();
}

module.exports = countryHandler;