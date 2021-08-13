require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('layout','layouts/main');

//app.set("views", "views")

const indexRouter = require('./routes/index');
const filterRouter = require('./routes/filter');
app.use('/',indexRouter);
app.use('/filter',filterRouter);

app.listen(port, () => {
  console.log(`Server up and running on port, ${port}`);
})