// import logo from './logo.svg';
// import './App.css';
import { List } from "./components/List";

import { ProductsDetails } from "./components/Show";

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<List />}></Route>

        <Route path="/Show/:id" element={<ProductsDetails />}></Route>

      </Routes >

    </div >
  );
}

export default App;
