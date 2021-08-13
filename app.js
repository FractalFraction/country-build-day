require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
//const bodyParser = require('body-parser')
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('layout','layouts/main');

// Custom Error Router
function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

// API Routers
app.get('/api', function(req, res, next){
  const key = process.env.NINJA_API_KEY;
  console.log(key);
  console.log('Performating API request')

  // all good, store req.key for route access
  next();
});

app.post({
  url: 'https://api.api-ninjas.com/v1/country?name=United States',
  headers: {
    'X-Api-Key': process.env.NINJA_API_KEY
  },

}, async (req, res) => {
    console.log('Made sucessful api request!');
  

  //res.header('first_name','HelloWorld');
	//res.send();

  // Store the data in a json file
  const countryData = await express.json(req.body);
  
  console.log('Parsed JSON!');

  console.log(countryData);
  
    // Send over information
  // const name = req.params.name;

  // Check if country is already in the database
  // countryInDB = await Country.findOne({name: name}).then(token => token !== null);
  // console.log(countryInDB);

  // if (! countryInDB) res.send(name);
  // else next();
  res.redirect('/')
})


const indexRouter = require('./routes/index');
const filterRouter = require('./routes/filter');
app.use('/',indexRouter);
app.use('/filter',filterRouter);

app.listen(port, () => {
  console.log(`Server up and running on port, ${port}`);
})