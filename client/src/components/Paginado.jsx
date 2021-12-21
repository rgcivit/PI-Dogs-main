import React from "react";
import "./Paginado.css"

export default function Paginado({ dogsPerPage, allDogs, paginado}) {
  const pageNumber = [];
  const division = Math.ceil(allDogs / dogsPerPage)  //8 dogs 
  for (let i = 1; i <= division; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <div className= "div-paginado">
        {pageNumber && pageNumber.map(number => (
          <div>
            <button className= "boton-paginado" onClick={() => paginado(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

