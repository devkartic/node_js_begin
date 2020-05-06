const express = require('express');
// let ejs = require('ejs');
const bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
app.set('view engine', 'ejs'); 

// Set Middleware for style start
/* 
For test
app.use('/assets', function(req, res, next){
  console.log(req.url);
  next();
});
*/

// Build in
app.use('/assets', express.static('assets'));

// Set Middleware for style end
 
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/contact', function (req, res) {
  res.render('contact', { qs : req.query });
});

app.post('/contact', urlencodedParser, function (req, res) {
  res.render('contact-success', { data : req.body });
});

app.get('/profile/:id', function (req, res) {
  let user = {
    id : req.params.id,
    name : 'kartic',
    hobbies : ['Sports', 'Watching Movies', 'Listening music', 'Programming']
  };
  res.render('profile', { user : user });
});

 
app.listen(3000);