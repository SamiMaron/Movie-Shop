import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


// Cart is a functional component that provides cart functionallity
// It uses the cartContext comp to access the cart and its methods
// It displays all the items that are added to cart and gives option to remove an item from the cart or clear entire cart
// It will also calculate and display the total cost of items in cart

const Cart = () => {
    const {cart, removeFromCart, clearCart} = useContext(CartContext);
    const totalCost = cart.reduce((total, item) => total + 3.99, 0);

    const backgroundImageStyle = {
        backgroundImage: 'url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876017.jpg)',
        width: '18rem'
    };

    if (cart.length === 0) {
        return <h1 className={"text-white"}>Please add items to your cart</h1>
    }

    return (
        <div className={"text-white"}>
            <h1>Cart</h1>
            <Row>
                {cart.map(item => (
                    <Col key={item.id} md={3}>
                        <Card style={backgroundImageStyle}>
                            <div className={"text-white"}>
                                <h3>{item.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
                                <p>Price: 3.99</p>
                                <Button variant={"danger"} onClick={() => removeFromCart(item.id)}>Remove from Cart</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h2>Total: ${totalCost.toFixed(2)}</h2>
            <Button variant={"danger"} onClick={clearCart}>Clear Cart</Button>
        </div>
    );
};

export default Cart;

