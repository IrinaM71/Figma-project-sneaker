import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contacts/Contact";
import CartProvider from "./context/cartContext";
function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        {/* Footer */}
      </div>
    </CartProvider>
  );
}
export default App;
