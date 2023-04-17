import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductsList from "./ProductsList";
import ProductForm from "./ProductForm";
import { Product } from "./products";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftSideBar from "./LeftSideBar";
import Home from "./Home";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 description",
    quantity: 10,
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 description",
    quantity: 20,
    price: 200,
  },
];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleSaveClick = (name: string, description: string, quantity: number, price: number) => {
    const newProduct: Product = {
      id: Date.now(),
      name: name,
      description: description,
      quantity: quantity,
      price: price
    };
    setProducts([...products, newProduct]);
    setShowModal(false);
  };

  const handleProductsClick = () => {
    setShowProducts(true);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-3">
        <LeftSideBar handleAddClick={handleAddClick} handleProductsClick={handleProductsClick} />
        <div className="row">
          <div className="col-md-2">
            {/* LeftSidebar */}
          </div>
          <div className="col-md-10">
            {/* Main Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<ProductsList products={products} show={showProducts} setShow={setShowProducts} />} />
              <Route path="/addProduct" element={showModal ? <ProductForm onSave={handleSaveClick} /> : null} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;