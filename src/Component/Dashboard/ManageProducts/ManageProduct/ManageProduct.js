import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';

const ManageProduct = ({handleDeleteProduct, product}) => {
 const {img, name, short_des, _id, price} = product;
    return (
       <Col>
        <Card as="div">
         <div className="img_div">
           <Card.Img variant="top" src={img} className="img"/>
         </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {short_des}
            </Card.Text>
            <Card.Text>$ {price} Only</Card.Text>
            <ButtonGroup onClick={()=>handleDeleteProduct(_id)}  className="buttonGrp">Delete Product</ButtonGroup>
            </Card.Body>
        </Card>
      </Col>
    );
};

export default ManageProduct;