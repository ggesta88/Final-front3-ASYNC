import React from "react";
import { useState } from "react";


const Form = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
  })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(user.name.length <= 5 || !isValidEmail(user.email)){
      setError(true)
      setSuccess(false)
    }
    else{
      setError(false)
      setSuccess(true)
    }
  }

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <input type="text" placeholder="Nombre" value={user.name} onChange={(event)=>setUser({...user, name:event.target.value})}/>
      <input type="email" placeholder="Correo Electronico" value={user.email} onChange={(event)=>setUser({...user, email:event.target.value})}/>
      <button onClick={handleSubmit}>Enviar</button>
      {success && <h3 style={{color: "lightgreen"}}>Gracias {user.name}, te contactaremos cuando antes vía mail</h3>}
      {error && <h4 style={{color:'red'}}>Por favor verifique su información nuevamente</h4>}
    </div>
  );
};

export default Form;