const express = require("express")
const workingHoureMiddleware = require('./middleware/workinghours')

const app = express()
const port = 4003

app.set('view engine', `ejs`)

app.set('views','./views')

app.use(express.static('public'));

app.use(workingHoureMiddleware)

app.get('/',(req, res)=>{
  res.render('home', {title: 'Home'})
} );

app.get('/services', (req, res)=> {
  res.render('services', {title: 'Our services'})
});

app.get('/contacts', (req, res)=> {
  res.render('contacts', {title: 'Contact Us'})
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})