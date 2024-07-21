const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 

app.get('/', (req, res) => {
    res.json( 'hello world' );
});

app.get('/number', (req, res) => {
    const min = parseInt(req.query.min) || 0;
    const max = parseInt(req.query.max) || 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({ randomNumber });
});

app.listen(port, () => {
    console.log(`Random number generator app listening at http://localhost:${port}`);
});
