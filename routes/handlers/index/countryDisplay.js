const db = require('../../../models');
const Country = db['Country'];

const countryHandler = async (req,res,next) => {

  const attributes = ['name', 'population', 'landarea'];

  const countries = await Country.findAll({
    attributes: attributes,
    order: [['name', 'ASC']]
  });

  req.app.locals.attributes = attributes
  req.app.locals.countries = countries;
  
  next();
}

module.exports = countryHandler;