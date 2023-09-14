const PokemonCard = ({ pokemon, index, onClick }) => {
  return (
    <div
      className="m-5 bg-green-400 w-40 flex justify-center items-center flex-col"
      onClick={onClick}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          index + 1
        }.gif`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>{index + 1}</p>
    </div>
  );
};

export default PokemonCard;
