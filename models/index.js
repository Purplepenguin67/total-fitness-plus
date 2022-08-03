const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Showing on terminal!');
    res.send('I will be on the browser');
});

app.listen(3000);