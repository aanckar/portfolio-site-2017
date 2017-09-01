const fs = require('fs')

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.render('index', {
			title: 'Andreas Anckar',
			projects: db.projects,
			env: 'DEV'
		})
	})
}