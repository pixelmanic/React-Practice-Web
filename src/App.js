import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Navbar />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
