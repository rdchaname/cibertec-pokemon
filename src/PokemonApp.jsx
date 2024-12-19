/* eslint-disable no-unused-vars */

import { AgregarPokemon } from "./components/AgregarPokemon";
import { Cabecera } from "./pages/Cabecera";
import { Footer } from "./pages/Footer";
import { ListaPokemon } from "./components/ListaPokemon";
import { useState } from "react";

export const PokemonApp = () => {
  const [pokemons, setPokemons] = useState(["ditto", "pikachu"]);

  console.log(pokemons);

  const onAgregarPokemon = (pokemon) => {
    if (pokemons.includes(pokemon)) return;
    setPokemons([pokemon, ...pokemons]);
  }

  return (
    <>
      <h1></h1>
      <div className="container">
        <Cabecera />
        <AgregarPokemon onNuevoPokemon={onAgregarPokemon} />
        <ol>
          {
            pokemons.map(pokemon => { return <ListaPokemon key={pokemon} pokemon={pokemon} /> })
          }
        </ol>
        <Footer />
      </div>
    </>
  );
};
