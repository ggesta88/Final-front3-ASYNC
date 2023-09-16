import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Favs from "./Pages/Favs"
import Detail from "./Pages/Detail"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/favs" element={<Favs/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
