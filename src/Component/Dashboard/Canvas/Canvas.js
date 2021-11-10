import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import DashboardData from '../DashboardData/DashboardData';
import MyOrders from '../MyOrders/MyOrders';
import Payments from '../Payments/Payments';
import ReviewsProducts from '../ReviewsProducts/ReviewsProducts';
const Canvas = () => {
    let { path, url } = useRouteMatch();

    return (
    <>    
    <Navbar bg="dark" variant="dark" expand={false}>
    <Container>
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        style={{backgroundColor: 'black'}}
        >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Link to={`${url}`}>Dashboards</Link>
            <Link to={`${url}/my_orders`}>My Orders</Link>
            <Link to={`${url}/payment`}>Payments</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
      
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
    <Switch>
        <Route exact path={path}>
          <DashboardData></DashboardData>
        </Route>
        <Route path={`${path}/my_orders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/payment`}>
          <Payments></Payments>
        </Route>
        <Route path={`${path}/reviews`}>
          <ReviewsProducts></ReviewsProducts>
        </Route>
      </Switch>
    </>
    );
};

export default Canvas;