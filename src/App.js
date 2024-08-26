import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import Form from './Components/Form';
import LoginPage from './Components/LoginPage';
import Products from './Components/Products';
import NotFound from './NotFound';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Navbar />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/form' element={<Form />} />
        <Route path='/login-page' element={<LoginPage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
