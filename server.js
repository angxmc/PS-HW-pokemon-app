//require express
const express = require("express");
//require the database of pokemon
const pokemon = require('./models/pokemon')

//set express to a variable
const app = express();
//set a variable of port to 3000
const port = 3000;

//set app to listen to the port and console log it so we know it's working
app.listen(port, () =>{
    console.log(`app is running on port: ${port}`);
})

//include an route / that will display 'Welcome to the Pokemon App!
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

//create a GET route /pokemon that will display the pokemon data
app.get('/pokemon', (req,res) => {
    res.send(pokemon)
})