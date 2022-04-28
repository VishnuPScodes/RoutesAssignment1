import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Fruites } from './components/Fruites'
import { Veg } from './components/Veg'
import { Fashion } from './components/Fashion'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Banner/>} ></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Fruites' element={<Fruites/>}></Route>
       <Route path='/Veg' element={<Veg/>}></Route>
       <Route path='/Fashion' element={<Fashion/>}></Route>
       <Route path='/FAQ' element={<FAQ/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
       
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
