let express = require('express');
let hf = require('./filter.js').helperFunctions
let app = express();
let port = 8080
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json()); //To parse JSON bodies
app.use(express.static(__dirname + '/'))

app.post('/createAddress', (req,res) => {
  let address = req.body.data
  if (!address) {
    let error = 'data object in create address is empty'
    console.error(error)
    res.send(error)
  }
  else {
    hf.addAddress(address)
    let message = `successfully added ${address} to JSON file`
    console.log(message)
    res.send(message)
  }
})
app.post('/searchAddresses', (req,res) => {
  console.log('req.body', req.body)
  let data = req.body.data
  if (!data) {
    let error = 'data object is empty'
    console.error(error)
    res.send(error)
  } else {
    let filtered = hf.filterByPosition(data)
    res.send(filtered)
  }
})

app.listen(port, () => { console.log(`server is running on http://localhost:${port}`)})

//