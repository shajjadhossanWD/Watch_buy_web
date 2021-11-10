import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, img, short_des} = product;

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
            <Link to={`/purchase/${name}`}>
            <ButtonGroup className="buttonGrp">Buy Now</ButtonGroup>
            </Link>
          </Card.Body>
        </Card>
      </Col>    );
};

export default Product;