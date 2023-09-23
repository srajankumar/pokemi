"use client";
import Pokedex from "@/components/Pokedex";
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="backdrop-blur-sm min-h-screen">
      {/* <h1>Pokédex</h1> */}
      <Pokedex />
      <div>
        <img
          src="/assets/footer.png"
          alt=""
          className="foot w-full blur-sm md:h-20"
        />
        {/* <div className="absolute sm:text-base font-bold text-white text-xs py-1 sm:py-3 md:py-4 bottom-0 text-center w-full">
          © {currentYear} pokemi
        </div> */}
      </div>
    </div>
  );
}
