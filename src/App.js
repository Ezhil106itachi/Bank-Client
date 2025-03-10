import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
// import { UserProvider } from './context';

function Home() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src={require("./bankvedio.mp4")} type="video/mp4" />
            </video>
            <div className="overlay"></div>
        </div>
    );
}

function App() {
    return (
        <HashRouter>
            
                <Navbar bg="dark" variant="dark" className="fixed-top">
                    <Container>
                        <Navbar.Brand href="#/" className="navbar-brand">

                        </Navbar.Brand>

                        <Nav className="ms-auto">
                            <Nav.Link href="#/">HOME</Nav.Link>
                            <Nav.Link href="#/register">CREATE</Nav.Link>
                            <Nav.Link href="#/deposit">DEPOSIT</Nav.Link>
                            <Nav.Link href="#/cashback">CASHBACK</Nav.Link>
                            <Nav.Link href="#/alldata">ALL-DATA</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/cashback" element={<Cashback />} />
                        <Route path="/alldata" element={<Alldata />} />
                    </Routes>
                </Container>
            
        </HashRouter>
    );
}

export default App;