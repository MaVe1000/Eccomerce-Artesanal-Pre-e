import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { CartView } from "./components/CartView/CartView";



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav/>
          <Hero/>
          <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
             <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
           <Route path="/cart" element={<CartView />} />
          </Routes>
          </main>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
