"use client"; // Pokedex.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import PokemonDetails from "./PokemonDetails";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemonList(response.data.results);
      });
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedPokemon(null); // Clear the selected Pokémon when searching
  };

  const handlePokemonClick = (pokemonName) => {
    setSelectedPokemon(pokemonName);
  };

  // Filter the pokemonList based on the search input
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      {" "}
      {selectedPokemon && <PokemonDetails pokemonName={selectedPokemon} />}
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search Pokémon by Name"
        value={searchInput}
        onChange={handleSearchInputChange}
      />{" "}
      {/* Display selected Pokémon details */}
      {/* Display filtered results */}
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-5 grid-cols-3 md:grid-cols-4">
          {filteredPokemonList.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              index={pokemonList.indexOf(pokemon)}
              onClick={() => handlePokemonClick(pokemon.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
