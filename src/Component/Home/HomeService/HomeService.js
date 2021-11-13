import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HomeService.css';

const HomeService = () => {
    return (
        <div className="container">

         <Row xs={1} md={2} lg={4} className="g-4 ">
           <Col>
           <Card className="imageCard">
            <Card.Body>
             
                <Card.Text className="imgDiv">
                    <img src="https://i.ibb.co/cxy0WXC/adjusting-watch-e1635136436976-691x1024.jpg" alt="" />
                </Card.Text>
               
            </Card.Body>
            </Card>
           </Col>


           <Col>
           <Card className="cards_home">
            <Card.Body>
                <Card.Title>
                    <div className="icon_div">
                     <i className="fas fa-award"></i>
                    </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-3">Best Services</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
           </Col>

           
           <Col>
           <Card className="cards_home">
            <Card.Body>
                <Card.Title>
                    <div className="icon_div">
                      <i className="fas fa-thumbs-up"></i>
                    </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-3">Years Experience</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
           </Col>


           <Col>
           <Card className="cards_home">
            <Card.Body>
                <Card.Title>
                    <div className="icon_div">
                      <i className="fas fa-money-check-alt"></i>
                    </div>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted fs-3">Certified Team</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
           </Col>
         </Row>
            
        </div>
    );
};

export default HomeService;