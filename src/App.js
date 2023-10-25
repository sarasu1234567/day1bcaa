import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Product from "./Components/product/Product";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Book from "./Components/Book/Book";
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
