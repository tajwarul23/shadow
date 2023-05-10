// // import PhoneIcon from '@mui/icons-material/Phone';
// import PhoneIcon from '@mui/icons-material/Phone';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


import photo from './shadow.jpg';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App bg-neutral-700 min-h-screen">
   <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
