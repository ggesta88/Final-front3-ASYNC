import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDentistStates()

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {console.log(state.theme)}
        {state.dentists.map(dentist => <Card dentist={dentist} key={dentist.id}/> )}
      </div>
    </main>
  )
}

export default Home