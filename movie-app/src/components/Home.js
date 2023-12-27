import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


// Home defines the home component which is the landing page of the application
// It sets a background image using the backgroundImageStyle object
// It also displays a greeting and instructions for user on how to search and buy movies


const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876017.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <Container className={"d-flex align-items-center justify-content-center text-white vh-100"}>
            <div>
                <div style={backgroundImageStyle}>
                    <h1>Hello, welcome to the Movie Store</h1>
                    <h4>Please use the menu to search and buy movies </h4>
                </div>
            </div>
        </Container>
    );
};

export default Home;

