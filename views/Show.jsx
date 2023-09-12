import React from "react";

function Show() {
  return (
    <div>
      <h1>Gotta Catch Them All</h1>
      {pokemon.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <img href={item.img}/>
            <a href="/pokemon">Back to all Pokemon</a>
          </div>
        );
      })}
    </div>
  );
}
