import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import './ManageOrder.css';

const ManageOrder = ({manageOrder, handleShippedBtn, handleOrderDelete}) => {
    const {itemsImg, name, status, Price, bookingItems, _id} = manageOrder;
    return (
      <Col>
        <Card as="div">
         <div className="img_div">
           <Card.Img variant="top" src={itemsImg} className="img"/>
         </div>
          <Card.Body>
            <Card.Title>{bookingItems}</Card.Title>
            <Card.Text>
             User Name: {name}
            </Card.Text>
            <Card.Text>$ {Price} Only</Card.Text>
              {
                status ? <ButtonGroup className="Shipped_btn">Shipped</ButtonGroup>
                :
                <>
                   <ButtonGroup className="pending_btn">Pending..</ButtonGroup>
                   <ButtonGroup onClick={()=> handleShippedBtn(_id)} className="approve_btn">Approve Now</ButtonGroup>

                </>
              }
            <ButtonGroup onClick={()=> handleOrderDelete(_id)} style={{marginLeft: '25px'}} className="deleteBtn">Delete</ButtonGroup>
            </Card.Body>
        </Card>
      </Col>
    );
};

export default ManageOrder;