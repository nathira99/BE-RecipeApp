// Import express module
const express = require('express');

// Create express application
const app = express();

app.get('/', (req,res) =>{
    res.json({message: `Hello World!`});
})

// Listen on a port for incoming requests
app.listen(3001, 'localhost', () => {
    console.log('server listening on http://localhost:3001');
});