import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';


const Home = () => {
    return (
        <div className="home-hero">
            <Container>
                <div>
                    <Row>
                        <Col md={6} xs={12} className="hero-info">
                            <h2 style={{fontSize : '4rem'}}>Todos List</h2>
                            <p>Find Your Daily Todos</p>
                            <Link to='/todos'>
                                <Button>Todos List</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Home;