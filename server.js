const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('frontend'));

app.get('/jason', function(req, res) {
  console.log('Handling the /json endpoint!');
  res.send('jason is really cool!');
});

app.get('/today', function(req, res) {
  res.send(new Date());
});

app.get('/redirect', function(req, res) {
  return res.redirect(301, 'https://yahoo.com');
});

// POST method route
app.post('/testPost', function (request, response) {
  console.log(request.body);
  response.redirect(303, '/')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
