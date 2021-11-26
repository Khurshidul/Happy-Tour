import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
           


            <div className="navbar-top">
                <div className="logIn-logOut">
                    {
                        user?.email ?

                            <Button onClick={logOut} className="logout" variant="outline-primary">Logout</Button>


                            :
                            <Nav.Link as={Link} to="/login">
                                <Button className="login" variant="outline-primary">Login</Button>
                            </Nav.Link>
                    }

                    <Nav.Link as={Link} to="/register">
                        <Button className="register" variant="outline-primary">Register</Button>

                    </Nav.Link>

                </div>
                <div>
                    <Nav.Link as={Link} to="/login">
                        {user?.displayName}
                        <img src={user?.img} alt="" />
                    </Nav.Link>
                </div>

                <div>
                    <Navbar className="navbar-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                                    <Nav.Link as={Link} to="/news">News</Nav.Link>

                                    {
                                        user.email ?
                                            <Nav>
                                                <Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
                                            </Nav>
                                            :
                                            <div></div>
                                    }

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </div>
    );
};

export default Header;