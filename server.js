//require express
const express = require("express");
//require the database of pokemon
const pokemon = require("./models/pokemon");
//require jsx-engine
const jsxEngine = require('jsx-view-engine')
//set express to a variable
const app = express();
//set a variable of port to 3000
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());



//include an route / that will display 'Welcome to the Pokemon App!
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//create a GET route /pokemon that will display the pokemon data
app.get("/pokemon", (req, res) => {
  
  res.render("Index", {pokemon});
});

// -Show Route - 
app.get('/pokemon/:id', (req,res) => {
  const {id} = req.params
  res.render('Show', {pokemon: pokemon[id]})
})


//set app to listen to the port and console log it so we know it's working
app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});