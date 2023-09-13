// import React from "react";

// const PokemonCard = ({ pokemon, index, onClick }) => {
//   return (
//     <div
//       className="m-5 bg-green-400 w-40 flex justify-center items-center flex-col"
//       onClick={onClick}
//     >
//       <img
//         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//           index + 1
//         }.png`}
//         alt={pokemon.name}
//       />
//       <p>{pokemon.name}</p>
//       <p>{pokemon.index}</p>
//     </div>
//   );
// };

// export default PokemonCard;

import React from "react";

const PokemonCard = ({ pokemon, index, onClick }) => {
  return (
    <div
      className="m-5 bg-green-400 w-40 flex justify-center items-center flex-col"
      onClick={onClick}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
          index + 1
        }.gif`}
        alt={pokemon.name}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          index + 1
        }.svg`}
        alt={pokemon.name}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>{index + 1}</p> {/* Corrected to display the index */}
    </div>
  );
};

export default PokemonCard;
