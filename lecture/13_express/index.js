'use strict'
const express = require('express')

var app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<html><body>hello world!!</body></html>')
});

app.get('/api', (req, res) => {
    res.json({ fname:'Steve', lname:'Song'});
})

app.listen(port, ()=>{
    console.log('server is running... port:' + port);
})

