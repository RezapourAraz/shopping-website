import { Routes, Route } from 'react-router-dom';
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
// Components
import Landing from './pages/Landing';
import Products from './pages/Products';
import Detailes from './pages/Detailes';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <>
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Detailes />} />
          <Route path="/cart" element={<ShopCart />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
    </>
  );
}

export default App;
