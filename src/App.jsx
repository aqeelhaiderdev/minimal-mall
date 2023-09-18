import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./pages/categories-pages/All";
import Furnitures from "./pages/categories-pages/Furnitures";
import Electronics from "./pages/categories-pages/Electronics";
import Lamps from "./pages/categories-pages/Lamps";
import Kitchen from "./pages/categories-pages/Kitchen";
import Chairs from "./pages/categories-pages/Chairs";
import SkinCare from "./pages/categories-pages/SkinCare";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";

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

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
