import React, { useState } from "react";
import ProductsList from "./ProductsList";
import ProductForm from "./ProductForm";
import { Product } from "./products";

// Import Bootstrap CSS and components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

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


  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">

              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>




      <div className="container mt-3 ">
        <div>
          <button className="btn btn-primary" onClick={handleAddClick}>
            Add Product
          </button>
          </div>
       
        <div className="row">

          <div className="col-md-12">
            <ProductsList products={products} />

          </div>
        </div>
        {showModal && <ProductForm onSave={handleSaveClick} />}
      </div>
    </div>
  );
};

export default App;
