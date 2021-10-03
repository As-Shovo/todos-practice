import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#" className="logo">Todos</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className="navbar-menu"><Link to='/home'>Home</Link></div>
                        <div className="navbar-menu"><Link to='/todos'>Todos</Link></div>
                        <div className="navbar-menu"><Link to='/About'>About</Link></div>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;