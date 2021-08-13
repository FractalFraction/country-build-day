module.exports = (req,res) => {
  //console.log(req.app.locals.countries);
  console.log('Isoname')
  console.log(req.app.locals.countries[0]);
  console.log(req.app.locals.countries[0].name);
  console.log(req.app.locals.countries[0].population);
  console.log(req.app.locals.countries[0].landarea);
  console.log(req.app.locals.countries[0].isoname);


  res.render('index', {countries: req.app.locals.countries, attributes: req.app.locals.attributes})
}