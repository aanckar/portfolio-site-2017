const fs = require('fs')

const readJson = fileName => {
  const file = fs.readFileSync(`${appRoot}/${fileName}`, 'utf8')
  return JSON.parse(file)
}

const writeJson = (data, fileName) => {
  const json = JSON.stringify(data, null, 2)
	fs.writeFile(`${appRoot}/${fileName}`, json, 'utf8', err => {
		if ( err ) { throw err }
	})
}

exports.load = db => {
	return readJson(`db/${db}.json`) || {}
}

exports.save = (db, data) => {
	writeJson(data, `db/${db}.json`)
}

exports.readJson = readJson