const express = require('express')
const app = express()
const port = 8081

let org = process.env.Org

app.get('/', (req, res) => {
	res.send('This is the root endpoint')
})

app.get("/she-codes", (req, res) => {
	res.send(`Hello SheCodesSendy from ${org}!`)
})

app.listen(port , () => {
	console.log('-----------------------')
})