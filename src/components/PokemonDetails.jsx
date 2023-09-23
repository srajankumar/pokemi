import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShinyImages, setShowShinyImages] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, [pokemonName]);

  const shinyImages = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${pokemonData?.id}.gif`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${pokemonData?.id}.gif`,
  ];

  const nonShinyImages = [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData?.id}.gif`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${pokemonData?.id}.gif`,
  ];

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) %
        (showShinyImages ? shinyImages.length : nonShinyImages.length)
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex -
          1 +
          (showShinyImages ? shinyImages.length : nonShinyImages.length)) %
        (showShinyImages ? shinyImages.length : nonShinyImages.length)
    );
  };

  const toggleShinyImages = () => {
    setShowShinyImages((prevShowShinyImages) => !prevShowShinyImages);
  };

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const currentImages = showShinyImages ? shinyImages : nonShinyImages;

  return (
    <div className="flex justify-center flex-col items-center text-white">
      <div className="bg-black">
        <h2>{pokemonData.name}</h2>
        <img src={currentImages[currentImageIndex]} alt={pokemonData.name} />
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
        <button onClick={toggleShinyImages}>
          {showShinyImages ? "Show Non-Shiny" : "Show Shiny"}
        </button>
        <h3>Details:</h3>
        <p>ID: {pokemonData.id}</p>
        <p>Height: {pokemonData.height} decimetres</p>
        <p>Weight: {pokemonData.weight} hectograms</p>
        <h3>Abilities:</h3>
        <ul>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Types:</h3>
        <ul>
          {pokemonData.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
        {/* Add more details you want to display */}
      </div>
    </div>
  );
};

export default PokemonDetails;
