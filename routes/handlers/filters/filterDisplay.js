const db = require('../../../models');
const Country = db['Country'];

const countryHandler = async (req,res,next) => {

  const countries = await Country.findAll({
    attributes: ['name', 'population', 'landarea','isoname'], 
    order: [[req.body.attribute, req.body.orderType || 'DESC']]
  });

  req.app.locals.countries = countries;
  next();
}

module.exports = countryHandler;