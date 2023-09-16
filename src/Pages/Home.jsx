import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/Context'


const Home = () => {

  const {state} = useDentistStates()

  return (
    <main className={state.theme}>
      <h1>Dentists</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => <Card dentist={dentist} key={dentist.id}/> )}
      </div>
    </main>
  )
}

export default Home