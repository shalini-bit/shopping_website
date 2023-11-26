import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<Shop/>}></Route>
          <Route path ='/mens' element={<ShopCategory category = "mens"/>}/>
          <Route path ='/womens' element={<ShopCategory category= "women"/>}/>
          <Route path ='/kids' element={<ShopCategory category = "kids"/>}/>
          <Route path ='/product' element={<Product/>}/>
          <Route path ='/cart' element={<Cart/>}/>
          <Route path = '/login' element ={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
