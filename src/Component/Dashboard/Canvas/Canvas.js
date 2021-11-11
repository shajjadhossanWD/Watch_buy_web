import React from 'react';
import { ButtonGroup, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import DashboardData from '../DashboardData/DashboardData';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payments from '../Payments/Payments';
import ReviewsProducts from '../ReviewsProducts/ReviewsProducts';
const Canvas = () => {
    let { path, url } = useRouteMatch();
    const {logOut, admin} = useAuth();
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
        
            {admin ? <>
            <Link to={`${url}/manageAllOrders`}>Manage All Orders</Link>
            <Link to={`${url}/addProduct`}>Add A Product</Link>
            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
            <Link to={`${url}/manageProducts`}>Manage Products</Link>
            </> 
            :
            <>
            <Link to={`${url}/my_orders`}>My Orders</Link>
            <Link to={`${url}/payment`}>Payments</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
            </>
            }
       
            
            <ButtonGroup onClick={logOut} className="buttonGrp mt-3">Logout</ButtonGroup>
      
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
        
        <AdminRoute path={`${path}/manageAllOrders`}>
           <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
           <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
    </>
    );
};

export default Canvas;