const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
app.use(cors())
function getRandom() {
    return (Math.floor(Math.random() *1000))
}
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended:true} ) );
app.use(bodyParser.json());
// Create MySQL connection
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sql@2023',
  database: "Tempus",
  multipleStatements:true
});

// Connect to MySQL database
connection.getConnection(function (err) {
    if(err) throw err;
    console.log("you are now connected!")
});



app.get("/", (req, res)=>{
    connection.query("select a.clid, nameOrCompanyName, number, email, pname,pDeadline from clientInfo as a left join projectinfo as b on a.clid = b.clid" , (err, res1)=>{
        if (err) {
            console.log(err);
            res1.status(500).send("Internal server error");
            return;
        }
        console.log('this is result from the get request in relationaltest.js:\n');
        console.log(res1);
        const list = res1.map(obj => Object.values(obj));
        console.log(list)
        res.json(list);
    });
})




app.post("/backend/route", (req, res)=>{
    console.log(req.body);
    const fname = req.body.firstName;
    console.log("fname = "+fname);
    const mobileno = req.body.mobileno;
    const email = req.body.email;
    const pName = req.body.projectName;
    const date = req.body.deadline;
    console.log("mobileno = "+mobileno);
    console.log("email = "+email);
    console.log("pname = "+pName);
    console.log("date = "+date);
    console.log(fname)
    //res.send(fname, mobileno, email,pName, date);
    let clid = getRandom();
    let pid = getRandom();
    connection.query(`insert into clientinfo (clid, nameOrCompanyName, number, email, Address) values("${clid}","${fname}","${mobileno}", "${email}", null); insert into projectinfo(pid, pName, clid, pDeadline) values("${clid}","${pName}","${clid}","${date}");`, (error, results)=> {
        if (error) {
            console.error(error);
            res.status(500).send('Error saving data to database');
        } else {
            
            
            const list =Object.values(results);
            res.json(list);
            //res.send('Data saved to database');
            
        }
    })
    
    // insert into clientMail (email) values ("${email}"); insert into clientcontact (number) values("${mobileno}");
})


app.put('/clients/:clid', (req, res) => {
    const { nameOrCompanyName, number, email, Address } = req.body;
    const { clid } = req.params;
  
    db.query(
      'UPDATE clientInfo SET nameOrCompanyName = ?, number = ?, email = ?, Address = ? WHERE clid = ?',
      [nameOrCompanyName, number, email, Address, clid],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating client info');
        } else {
          console.log(`Client with id ${clid} updated`);
          res.status(200).send(`Client with id ${clid} updated`);
        }
      }
    );
  });
  
// Update project info
app.put('/projects/:pid', (req, res) => {
    const { pName, clid, pdeadline } = req.body;
    const { pid } = req.params;
  
    db.query(
      'UPDATE projectInfo SET pName = ?, clid = ?, pdeadline = ? WHERE pid = ?',
      [pName, clid, pdeadline, pid],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating project info');
        } else {
          console.log(`Project with id ${pid} updated`);
          res.status(200).send(`Project with id ${pid} updated`);
        }
      }
    );
  });

// app.post('/')
// Define routes and middleware here...

// Start the Express server
const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

