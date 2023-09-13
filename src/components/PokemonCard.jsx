import React from "react";

const PokemonCard = ({ pokemon, index }) => {
  return (
    <div className="m-5 bg-green-400">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>{pokemon.index}</p>
    </div>
  );
};

export default PokemonCard;
