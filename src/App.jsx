// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Index from './Components/Index.jsx'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Review from './Components/Review'
const App = () => {
  return (
  
   <Router>
  <Navbar />
   <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/Services' element={<Services />}/>
    <Route path='/Pricing' element={<Pricing/>}/>
    <Route path='/Review' element={<Review/>}/>
   </Routes>
   <Footer /> 
 </Router>
      
  )
}

export default App
