import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


// NavbarWeb component is the navigation bar of the application
// it uses cartContext in order to fetch the current items of the cart to display the amount in the cart link
// it also has links to navigate to various routes like Home, Search, Cart and Checkout.



const NavbarWeb = () => {
    const {cart} = useContext(CartContext);

    return(
        <Navbar bg={"dark"} variant={"dark"}>
            <Container>
                <Navbar.Brand href={"#home"}>
                    <Nav className={"me-auto"}>
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                        <Nav.Link as={Link} to={"/cart"}>Cart ({cart.length})</Nav.Link>
                        <Nav.Link as={Link} to={"/checkout"}>Checkout</Nav.Link>
                    </Nav>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarWeb;


