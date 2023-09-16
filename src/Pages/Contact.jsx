import React from 'react'
import Form from '../Components/Form'
import { useDentistStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useDentistStates()

  return (
    <div className='contact'>
      <div className={state.theme}>
      <h2>Quieres saber mas?</h2>
      <p>Dejanos tus datos y te contactaremos</p>
      <Form className={state.theme}/>
    </div>
    </div>
  )
}

export default Contact