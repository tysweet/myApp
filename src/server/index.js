const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "0beccce9",
  apiSecret: "5vUwNAPeHAPaSPad",
}, {debug: true});

app.set('views', __dirname + '../components/asshole')
app.set('views', __dirname + '../components/awesome');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '../src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  res.send(req.body);
  console.log(req.body);
  let toNumber = req.body.number;
  let text = req.body.text;
  nexmo.message.sendSms(
    12014775513, toNumber, text, {type: 'unicode'},
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
  );
});

const server = app.listen(3000);
