const fs = require('fs')

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		const manifest = db.readJson('public/assets/manifest.json')
		res.render('index', {
			title: 'Andreas Anckar',
			script: manifest['app.js'],
			projects: db.projects,
			env: process.env.NODE_ENV || 'dev'
		})
	})
}