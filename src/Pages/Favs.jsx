import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentistStates()

  return (
    <>
      <div className={state.theme}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
        </div>
      </div>
    </>
  );
};

export default Favs;