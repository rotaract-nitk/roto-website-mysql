const dotenv = require('dotenv');
const path = require('path');
const mysql = require('mysql2');
const express = require('express');
const app = express();

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});
 
connection.connect((err)=>{
    if (err)
    return console.log(err)
    console.log("Connected to MYSQL service")
})

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

const terminationSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT']

terminationSignals.forEach(signal => process.on(signal, () => {
  /** do your logic */
  console.log("\nClosing app gracefully!");
  connection.end(()=>{
    console.log("Disconnected MYSQL service")
  })
  server.close(()=>{
    console.log("Stopped server")
    console.log("Goodbye 👋")
    process.exit(0)
  })
}));
 