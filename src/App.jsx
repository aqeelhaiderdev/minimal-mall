import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Categories from "./assets/pages/Categories";
import All from "./assets/pages/categories-pages/All";
import Furnitures from "./assets/pages/categories-pages/Furnitures";
import Electronics from "./assets/pages/categories-pages/Electronics";
import Lamps from "./assets/pages/categories-pages/Lamps";
import Kitchen from "./assets/pages/categories-pages/Kitchen";
import Chairs from "./assets/pages/categories-pages/Chairs";
import SkinCare from "./assets/pages/categories-pages/SkinCare";
import ProductPage from "./assets/pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
