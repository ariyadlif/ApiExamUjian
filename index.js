const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//conection mongodb
let db = "mongodb+srv://babastudio:b4b4studio2019@cluster0-khreh.mongodb.net/api_shop?retryWrites=true&w=majority"
mongoose.connect(db)
	.then(db => console.log('db connected'))
	.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
		extended : true
	})
)

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
	console.log('Berhasil menjalankan server di 8000')
})