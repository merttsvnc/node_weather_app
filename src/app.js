const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Sevinc Mert',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Sevinc Mert',
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Sevinc Mert',
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Sevinc Mert',
    errorMessage: 'Help article not found.',
  })
})

app.get('*', (req, res) => {
  res.send('My 404 Page')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
