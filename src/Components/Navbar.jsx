import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useDentistStates()

  const toggleTheme = () => {
    const newTheme = state.theme === 'ligth' ? 'dark' : 'ligth'
    dispatch({type: 'SET_THEME', payload: newTheme})
  }

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar