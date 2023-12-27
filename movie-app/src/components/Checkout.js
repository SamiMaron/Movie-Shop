import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';

// Checkout defines checkout handling for user when checks out
// formData is a local state that handles form inputs. it provides form input handlers for interacting
// handleSubmit function sends a POST request to server containing user's checkout details and clears the cart.
// the component displays a checkout form and shows the total price for the items in cart


const Checkout = () => {
    const {cart, clearCart} = useContext(CartContext);
    const totalCost = cart.reduce((total, item) => total + 3.99, 0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        payment: totalCost
    });

    if (cart.length === 0) {
        return <h1 className={"text-white"}>Please add items to your cart before checking out</h1>
    }

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/checkout', formData);
            clearCart();
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <form className={"text-white"} onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type={"text"} name={"firstName"} value={formData.firstName} onChange={handleInputChange} required />
            </label>
            <label>
                Last Name:
                <input type={"text"} name={"lastName"} value={formData.lastName} onChange={handleInputChange} required/>
            </label>
            <label>
                Email:
                <input type={"email"} name={"email"} value={formData.email} onChange={handleInputChange} required />
            </label>
            <p>Total Price: ${totalCost.toFixed(2)}</p>
            <Button variant={"success"} type={"submit"} value={"Submit"}>Submit</Button>
        </form>
    );
};

export default Checkout;


