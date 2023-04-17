import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

interface LeftSideBarProps {
    handleAddClick: () => void;
    handleProductsClick: () => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ handleAddClick, handleProductsClick }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="flex-column fixed-left">
            <div className="sidebar-sticky pt-3">
                <Navbar.Brand as={Link} to="/">
                    Dashboard
                </Navbar.Brand>
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/Home" active>
                            Home
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to="/addProduct" onClick={handleAddClick}>
                            Add Product
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/products" onClick={handleProductsClick}>
                            View Products
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
};

export default LeftSideBar;