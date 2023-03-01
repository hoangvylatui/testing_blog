const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyparser=require("body-parser");
const cors=require("cors");
// const Encoding=require("encoding");
const port = process.env.PORT || 3001;
var encoder=bodyparser.urlencoded();

app.use(express.json());
app.use(cors());
// app.use(Encoding());
const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12595659',
  password: 'ElKK3LjcWk',
  database: 'sql12595659'
});

connection.connect(function(err){
    if(err)  throw(err)
    else
    {console.log("connected")}
  });
 
// app.post('/register',encoder,function (req, res) {
//   var password=req.body.password;
//   var username=req.body.username;
//   var email=req.body.email;
// //   res.setHeader("/login");
//   connection.query("insert into  Login_web (Password, User, Email) values (?,?,?)",[password,username,email],(err,results)=>{
    
//        if(results) 
//        {
//         res.send(results);
//        }else
//        res.send("no");
//   }
//   )
// });

// app.post('/login',encoder,function (req, res) {
//     var password=req.body.password;
//     var username=req.body.username;
//     // res.setHeader("/register");
//     connection.query("select * from Login_web where Password =? and User=?) values (?,?)",[password,username],(err,results)=>{
      
//          if(results) 
//          {
//           res.send(results);
//          }else
//          res.send("no user");
//     }
//     )
//   });
app.get('/home/data', (req, res) => {
  connection.query("SELECT DISTINCT * FROM Car_one;", (err, results, fields) => {
    if(err) throw err;
     res.json(results[0]);

  });
});  

  app.get('/home/data/tempt', (req, res) => {
    connection.query("SELECT DISTINCT temperature FROM Car_one;", (err, results, fields) => {
      if(err) throw err;
       res.json(results[0]);

    });
  });

  app.get('/home/data/speed', (req, res) => {
    connection.query("SELECT DISTINCT engine_speed FROM Car_one;", (err, results, fields) => {
      if(err) throw err;
       res.json(results[0]);

    });
  });

  app.get('/home/data/fuel', (req, res) => {
    connection.query("SELECT DISTINCT Fuel FROM Car_one;", (err, results, fields) => {
      if(err) throw err;
       res.json(results[0]);

    });
  });
  // app.post('/home/speed',encoder,function (req, res) {
  //   // var speed=req.body.speed;
  //       var speed;
  //   connection.query("select * from Car_one where =?) values (?)",[speed],(err,results)=>{
  //     if(results.length>0) 
  //     {
  //      speed=results;
  //     }else
  //     res.send("no user");
  //   })
  // });

app.listen(port, () => console.log('App listening on port 3001'));