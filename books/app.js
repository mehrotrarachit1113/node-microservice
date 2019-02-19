const express = require('express')
const Book = require('./models/books_model')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

// GET request to the home page
app.get('/' , (req , res) => {
    res.json({msg : "books"})
})

// GET request to the /api/v1/books
app.get('/api/v1/books', async (req , res) => {
    const books = await Book.find({})
    res.json(books);
})

// POST request to the /api/v1/books
app.post('/api/v1/books' , async (req , res) => {
    const book = new Book({ name : req.body.name})
    const savedBook = await book.save();
    res.json(savedBook)
})

module.exports = app