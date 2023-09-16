import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context/Context'


const Navbar = () => {

  const {state, dispatch} = useDentistStates()

  const toggleTheme = () => {
    const newTheme = state.theme === 'ligth' ? 'dark' : 'ligth'
    dispatch({type: 'SET_THEME', payload: newTheme})
  }

  return (
    <nav className={state.theme}>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar