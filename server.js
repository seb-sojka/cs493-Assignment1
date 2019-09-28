const express = require('express');
const app = express();
const path = require(`path`);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(`Hello from the otherside`);
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
console.log(`Server listening to smooth jazz on ${PORT} ...`);
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
  console.log({
    name: req.body.name,
    city: req.body.city
  });
  var name = req.body.name;
  var city = req.body.city;
  res.send(`Hello ${name} from ${city}. How are you today?`);
});