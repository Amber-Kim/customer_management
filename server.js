const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})
connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'})

// Read 
app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM management.CUSTOMER WHERE isDeleted = 0",
    (err, rows, field) => {
      res.send(rows);
    }
  )
})

app.use('/image', express.static('./upload'))

// Create
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = "INSERT INTO CUSTOMER VALUES(null, ?, ?, ?, ?, ?, now(), 0)";
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err)
    })
})

// Update
app.post('/api/customers/:id', upload.single('image'), (req, res) => {
  let sql = 
  "UPDATE CUSTOMER SET isDeleted = 0, image=?, createdDate=now(), name=?, birthday=?, gender=?, job=? WHERE id = " + req.params.id;
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let id = req.params.id;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job, id];
    connection.query(sql, params,
      (err, rows, field) => {
        res.send(rows);
        console.log(err);
      })
  })

// Delete
app.delete('/api/customers/:id', (req, res) => {
  let sql = "UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?";
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.listen(port, () => console.log(`Listening on port ${port}`))