import "./App.css";
import CartList from "./components/CartList";
// import CartList from "./components/CartList";
import ShoppingList from "./components/ShoppingList";
import { Routes, Route } from "react-router-dom";
import Nav from "./utils/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<ShoppingList />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
