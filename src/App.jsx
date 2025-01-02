import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './landing_page/home/Homepage'
import About from './landing_page/about/About';
import Signup from './landing_page/signup/signup';
import Login from './landing_page/signup/login';
import Product from './landing_page/products/Product';
import Support from './landing_page/support/Support';
import Pricing from './landing_page/pricing/Hero';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
