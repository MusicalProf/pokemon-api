import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  }, []);

  return (
    <div className="container w-50 border rounded-lg mt-3">
      <h4>Below is a list of 807 pokemon</h4>
      {/* <button onClick={capture807}>Fetch Pokemon</button> */}
      <hr />
      
      {pokemon.length > 0 &&
        pokemon.map((poke, index) => {
          return <div key={index}>Name: {poke.name} Json URL: <a href={poke.url}>{poke.name}</a></div>;
        })}
    </div>
  );
};

export default Pokemon;
