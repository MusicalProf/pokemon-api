import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [capture, setCapture] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  }, []);

  const capture807 = (e) => {
    e.preventDefault();
    if (capture === false) {
      setCapture(true);
    } else {
      setCapture(false);
    }
  };

  return (
    <div className="container w-50 border rounded-lg mt-3">
      <h4>Click below for a list of 807 pokemon</h4>
      <button className="btn btn-primary" onClick={capture807}>
        Fetch Pokemon
      </button>
      <hr />

      <table className="table table-striped col-10 shadow">
        <tr>
          <th>Poke #</th>
          <th>Poke Name</th>
        </tr>

        {capture
          ? pokemon.length > 0 &&
            pokemon.map((poke, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{poke.name}</td>
                </tr>
              );
            })
          : ""}
      </table>
    </div>
  );
};

export default Pokemon;
