const fs = require('fs')

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.render('index', {
			title: 'Andreas Anckar',
			script: db.manifest['app.js'],
			projects: db.projects,
			env: process.env.NODE_ENV || 'dev'
		})
	})
}