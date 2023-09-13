// PokemonDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 right-0 bg-black text-white">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      {/* Add more details you want to display */}
    </div>
  );
};

export default PokemonDetails;
