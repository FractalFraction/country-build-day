module.exports = (req,res) => {
  console.log(req.app.locals.countries);
  res.render('index', {countries: req.app.locals.countries, attributes: req.app.locals.attributes})
}