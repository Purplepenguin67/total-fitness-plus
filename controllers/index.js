const express = require('express');

const app = express();

//routes
app.get('/', (req,res) => {
    res.send('we are on home');


}

app.listen(3000);