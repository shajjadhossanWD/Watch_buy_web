import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';

const Order = ({order, handleDelete}) => {
    const {name, itemsImg, bookingItems, Price, _id, status } = order
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
                status? <ButtonGroup className="pending_btn">Approved</ButtonGroup>:<ButtonGroup className="pending_btn">Pending..</ButtonGroup>
              }
            <ButtonGroup style={{marginLeft: '25px'}} onClick={() => handleDelete(_id)} className="buttonGrp">Delete</ButtonGroup>
            </Card.Body>
        </Card>
      </Col>
    );
};

export default Order;