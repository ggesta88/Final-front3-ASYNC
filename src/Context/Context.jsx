import axios from "axios"
import { createContext, useContext, useReducer, useEffect } from "react"

const dentistStates = createContext()

const reducer = (state, action) => {
    switch(action.type) {        
        case 'GET_DENTISTS':
            return {...state, dentists: action.payload}
        case 'GET_DENTIST':
            return {...state, dentist: action.payload}
        case 'ADD_TO_FAVORITES':
            return {...state, favs: [...state.favs, action.payload]}
        case 'SET_THEME':
            return {...state, theme: action.payload}
        default:
            return state
    }
}

const localTheme = localStorage.getItem('theme')
const initialThemeState = localTheme ? localTheme : ''

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState  = {
    dentists: [],
    dentist: [],
    favs: initialFavState,
    theme: initialThemeState,
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res.data)
            console.log(res.data.name)
            dispatch({type: 'GET_DENTISTS', payload: res.data})
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    useEffect(() =>{
        localStorage.setItem('theme',state.theme)
        }, [state.theme])

    return(
        <dentistStates.Provider value={{dispatch, state}}>
            {children}
        </dentistStates.Provider>    
    )
}

export default Context

export const useDentistStates = () => useContext(dentistStates)