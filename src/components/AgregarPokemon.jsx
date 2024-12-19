/* eslint-disable react/prop-types */

import { useState } from "react";

export const AgregarPokemon = ({ onNuevoPokemon }) => {
  const [valorInput, setValorInput] = useState("charizard");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (valorInput.trim().length <= 1) return;
    onNuevoPokemon(valorInput.trim().toLowerCase());
    setValorInput("");
  };

  return (
    <>
      <form
        onSubmit={manejarSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Pokemon"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        ></input>
      </form>
    </>
  );
};
