import React from 'react'
import { useDentistStates } from '../Context/Context'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import imageDentist from '../images/doctor.jpg'


const Detail = () => {

  const {state, dispatch} = useDentistStates()
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const { name, email, phone, website} = state.dentist
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
 
  useEffect(() => {
    axios(url)
    .then(res => {
      console.log(res.data)
      dispatch({type: 'GET_DENTIST', payload: res.data})
      setLoading(false)})
    .catch(err => console.log(err))
    },[id])

  return (
    <>
    <div className={state.theme}>
      {loading ? 'Loading...' : <>
        <h1>Detail Dentist id </h1>
        <h2>{name}</h2>
        <img src={imageDentist} alt="dentist" />
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Website: <a href="">{website}</a></h4>
      </>}
      
    </div>
     
    </>
  )
}

export default Detail