const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;
// servir contenido estatico
app.use(express.static('public'));
app.get('/hello', (req, res) => {
    res.send('Hello ')
})

app.get('*', (req, res) => {
    res.send('not found ')
})

app.listen(port)