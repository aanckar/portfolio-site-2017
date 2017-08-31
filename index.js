const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./lib/db')
const app = express()
const port = process.argv[2] || 3000
const server = app.listen(port, '0.0.0.0')

app.use(express.static(`${__dirname}/data`))
app.use('/assets', express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

/**
 * DB
 */
const dataFiles = [
	'projects'
]
dataFiles.forEach(file => {
	if ( fs.existsSync(`./db/${file}.json`) ) {
		db[file] = db.load(file)
	}
})

require('./lib/routes')(app, db)