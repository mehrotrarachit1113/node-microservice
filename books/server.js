const app = require('./src/app')
const { DB_URI } = require('./src/config')
const mongoose = require('mongoose')

mongoose.connect(DB_URI)

const port = process.env.port || 3000

app.listen(port , () => {
    console.log(`The server is up and running on ${port}`)
})