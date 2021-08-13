module.exports = (req,res) => {
  console.log(req.app.locals.countries);
  console.log(req.app.locals.countries[0]);
  console.log(req.app.locals.countries[0].name);
  console.log(req.app.locals.countries[0]);

  res.render('index', {countries: req.app.locals.countries, attributes: req.app.locals.attributes})
}