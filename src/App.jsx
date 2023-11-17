import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

import "./App.css";
import { DetailsProduct } from "./pages/DetailsProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="PRODUCTOS"/>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="PRODUCTOS"/>} />
          <Route path="/items/:id" element={<DetailsProduct />} />
          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting="¿También guardas hilos adentro de una lata de Royal Dansk?" /> */}
    </>
  );
}

export default App
