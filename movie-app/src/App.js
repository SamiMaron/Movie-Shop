import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarWeb from './components/NavbarWeb';
import Home from './components/Home';
import Search from './components/Search';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { SearchHistoryProvider } from './components/SearchHistoryContext';
import { CartProvider } from "./components/CartContext";


//App is the root component which provides routing for application.
//It encapsulates within the SearchHistoryProvider and CartProvider, giving child components access to search history
// and cart data.
//Routes for Home, Search, Cart, and Checkout pages is defined with React Router
//NavbarWeb navigation bar is present on all pages.
//The backgroundImageStyle object sets the background image for the entire application.

function App() {

    const backgroundImageStyle = {
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/05/62/22/08/360_F_562220862_l84g9b0ghzmfyyteR3aEtiqDBWfRCOxz.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
    };

    return (
        <SearchHistoryProvider>
            <CartProvider>
                <Router>
                    <div style={backgroundImageStyle}>
                        <NavbarWeb/>
                        <Container fluid>
                        <Row>
                            <Col>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/search" element={<Search />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                </Routes>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Router>
            </CartProvider>
        </SearchHistoryProvider>
    );
}

export default App;
