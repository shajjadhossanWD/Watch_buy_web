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
                IWS is a professional watch repair service & sales company. We do repairs, services, polishing, water damage repairs & more,
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
                The Swiss Watch Academy is open to all people, watch amateurs as well as watch lovers, who want to live an out of this world experience,
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
                The ultimate security for your watch, authenticated by a watchmaker and certified by an expert. The Watch Certificate™ attests to its value.
                </Card.Text>
            </Card.Body>
            </Card>
           </Col>
         </Row>
            
        </div>
    );
};

export default HomeService;