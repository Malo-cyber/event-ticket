const express = require("express")
const concertRoutes = require("./routes/concert.js")
const userRoutes = require('./routes/user');
const ticketRoutes = require('./routes/ticket');
const bodyParser = require("body-parser")
const Db = require('./db/db.js')
require("dotenv").config();
const PORT = process.env.NODE_DOCKER_PORT || 1080;

const jsonParser = bodyParser.json()

const app = express()

app.use("/static", express.static(__dirname + '/public'));

app.use(jsonParser);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Pass to next layer of middleware
    next();
});

app.use(concertRoutes)
app.use(ticketRoutes)
app.use(userRoutes)

Db.sync({alter : true})
.then(console.log("connexion a la bdd"))
.catch(error => console.log(error));

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}.`)
});