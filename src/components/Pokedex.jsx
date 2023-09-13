"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} index={index} />
      ))}
    </div>
  );
};

export default Pokedex;
