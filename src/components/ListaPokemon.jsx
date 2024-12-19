/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import { obtenerPokemon } from "../helpers/obtenerPokemon";

export const ListaPokemon = ({ pokemon }) => {
  const [imagenes, setImagenes] = useState([]);

  const obtenerImagenes = async () => {
    const nuevaImagen = await obtenerPokemon(pokemon);
    setImagenes(nuevaImagen);
  };

  useEffect(() => {
    obtenerImagenes();
  }, []);

  return (<>

    <div className="col-md-4">

      <h3>{pokemon}</h3>

      <div className="card">
        <img className="card-img-top" src={imagenes.imgSrc} />
        <div className="card-body">
          <h5 className="card-title">{imagenes.type}</h5>
        </div>
      </div>

      <ul>
        <li><img src={imagenes.imgSrc} /></li>
        <li> {imagenes.attack}</li>
        <li> {imagenes.defense}</li>

      </ul>

    </div>



  </>)

};
