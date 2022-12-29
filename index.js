const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});


const express = require('express');
const app = express();
const db = require(path.resolve(__dirname,'models','index'));
db.sequelize.sync();

const homePageRoutes = require('./routes/mainroute');
app.use(express.static(path.join(__dirname, "public")));


try {
  db.sequelize.authenticate();
  console.log('Database connected successfully!');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use('/', homePageRoutes);

const terminationSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT']

terminationSignals.forEach(signal => process.on(signal,async () => {
  console.log("\nClosing app gracefully!");
  await db.sequelize.close();
  console.log("Disconnected MYSQL service");
  server.close(()=>{
    console.log("Stopped server")
    console.log("Goodbye 👋")
    process.exit(0)
  })
}));
 