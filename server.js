const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': 'amber',
      'birthday': '951120',
      'gender': 'Female',
      'job': 'developer'
      },
      {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': 'elthon',
      'birthday': '860406',
      'gender': 'male',
      'job': 'gamer'
      },
      {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': 'shawn',
      'birthday': '930621',
      'gender': 'male',
      'job': 'mid developer'
    },
  ])
})

app.listen(port, () => console.log(`Listening on port ${port}`))