const React = require('react')
const style = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index({pokemon}) {
    
  return (
    <div style={style}>
      <h1>Pokemon Page</h1>
      <ul>
        {pokemon.map((item, index)=>{
            return(
                <li key={index}>
                    <a href={`/pokemon/${index}`}>{capitalizeFirstLetter(item.name)}</a>
                    
                </li>
            )
        })}
      </ul>
    </div>
  );
}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = Index;
