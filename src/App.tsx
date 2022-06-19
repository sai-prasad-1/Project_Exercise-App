
import {Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExersiseDetails from './pages/ExersiseDetails';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
   <Box width='400px'  sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exersise/:id" element={<ExersiseDetails/>} />
    </Routes>
    <Footer/>
   </Box>
  )
}

export default App
