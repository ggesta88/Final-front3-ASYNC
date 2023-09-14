import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import dentista from '../images/doctor.jpg'


const Card = ({dentist}) => {

    const {dispatch} = useDentistStates()

  const addFav = ()=>{
    dispatch({type: 'ADD_TO_FAVORITES', payload: dentist})
  }

  return (
      <div className="card">
        <Link to={'/detail/' + dentist.id}>
          <img src={dentista} alt="dentista"/>
          <h3>{dentist.name}</h3>
          <h4>{dentist.username}</h4>
          
        </Link> 
        <button onClick={addFav} className="favButton">Add fav</button>
      </div>
  );
};

export default Card;