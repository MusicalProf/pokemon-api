import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [capture, setCapture] = useState(false);

  // Using only useEffect hook with fetch
  //   useEffect(() => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //       .then((response) => response.json())
  //       .then((response) => setPokemon(response.results));
  //   }, []);

  // Updating to use Axios along with useEffect
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => setPokemon(response.data.results));
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

      <table className="table table-success thead-dark table-striped shadow">
        <thead className="thead-dark">
            <tr>
              <th>Poke #</th>
              <th>Poke Name</th>
            </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
