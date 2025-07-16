 import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
 
 const App = () => {
   return (
      <div>
        
    <Navbar></Navbar>
   
    <Home></Home>
    <About></About>
     <Contact />
      </div>
   )
 }
 
 export default App