require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const db = require('./config/database')
db.authenticate()
.then(() => console.log('Database Connected'))
.catch(err => console.log('Error :: ' + err))

const app = express()
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
	res.send('INDEX')
})

app.use('/gigs', require('./routes/gigs'))

const port = process.env.PORT || 8080;
app.listen(port, (req,res) => {
	console.log(`Server started at ${port}`)
})
