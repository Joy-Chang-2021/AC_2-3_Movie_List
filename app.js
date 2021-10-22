// express
const express = require('express')
const app = express()
const port = 3000
// handlebars
const exphbs = require('express-handlebars')
// Movie List
const movieList = require('./movies.json')

// express template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

//routes setting
app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.get('/movies/:id', (req, res) => {
  const filtered_movie = movieList.results.find(item => item.id.toString() === req.params.id)
  res.render('show',{ movie: filtered_movie })
})

app.listen(port, () => {
  console.log(`this page is running by http://localhost:${port}`)
})