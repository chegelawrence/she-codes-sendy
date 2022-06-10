const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 8082

let connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
})


app.get('/api/users', (req, res) => {
	connection.connect((err) => {
		if(err) {
			console.error(`Error connecting to the DB ${err.stack}`)
			return
		}

		connection.query('SELECT id, username FROM users', (err, results, fields) => {
			if(err) throw err;
			console.log(results)
			return
		})
	})
})


app.listen(port , () => {
	console.log('Server is running')
})