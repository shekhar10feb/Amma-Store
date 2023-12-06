import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductCategory } from "./components/ProductCategory";
import { ProductSearch } from "./components/ProductSearch";
import { ProductSlider } from "./components/ProductSlider";
import { RandomProducts } from "./components/RandomProducts";
import { Electronics } from "./components/Electronics";
import { Clothes } from "./components/Clothes";
import { Groceries } from "./components/Groceries";
import { BottomLinks } from "./components/BottomLinks";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productSearch" element={<ProductSearch />} />
          <Route path="productCategory/:id" element={<ProductCategory />} />
          <Route path="productSlider/:id" element={<ProductSlider />} />
          <Route path="randomProducts/:id" element={<RandomProducts />} />
          <Route path="electronics" element={<Electronics />}  />
          <Route path="clothes" element={<Clothes />}  />
          <Route path="groceries" element={<Groceries />}  />
          <Route path="signin" element={<Signin />} />
          <Route path="bottomlinks" element={<BottomLinks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
