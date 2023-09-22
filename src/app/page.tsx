"use client";
import Pokedex from "@/components/Pokedex";
export default function Home() {
  return (
    <div className="backdrop-blur-sm min-h-screen">
      {/* <h1>Pokédex</h1> */}
      <Pokedex />
    </div>
  );
}
