const fs = require('fs')

const getManifest = db => {
	return db.readJson('public/assets/manifest.json')
}

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		const manifest = getManifest(db)
		console.log(manifest)
		res.render('index', {
			title: 'Andreas Anckar',
			script: manifest['app.js'],
			projects: db.projects,
			env: process.env.NODE_ENV || 'dev'
		})
	})
}