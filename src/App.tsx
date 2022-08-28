
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import AboutUs from './components/AboutUs';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExersiseDetails from './pages/ExersiseDetails';
import './App.css'
import Footer from './components/Footer';

function App() {
  window.addEventListener('load', (_event) => {
    console.log('page is fully loaded');
  });
  return (
   <div className='overflow-x-clip'>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exersise/:id" element={<ExersiseDetails/>} />
      <Route path='/bmi' element={<AboutUs/>} />
    </Routes>
    <Footer/>
    <ToastContainer />
   </div>
  )
}

export default App
