import { useEffect, useState } from "react";

import { obtenerPokemones } from "../helpers/obtenerPokemon";

export const ListaPokemon = ({ pokemon }) => {
  const [imagenes, setImagenes] = useState([]);

  const obtenerImagenes = async () => {
    const nuevaImagen = await obtenerPokemones(pokemon);
    setImagenes(nuevaImagen);
  };

  useEffect(() => {
    obtenerImagenes();
  }, []);

return ( <>
  <div className="col-md-4">
    <h3>{pokemon}</h3>
    <div className="card" key={imagenes.id}>
      <img className="card-img-top" src={imagenes.imgSrc} />
      <div className="card-body">
        <h5 className="card-title">Tipo: {imagenes.type}</h5>
        <ul>
          <li>Ataque : {imagenes.attack}</li>
          <li>Defensa : {imagenes.defense}</li>
          <li>Ataque : {imagenes.attack}</li>
        </ul>
      </div>
    </div>
  </div>
</>)

};
