import React from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <div className="container my-5">
           <div className="cards_title">
           <p><b>HAPPENINGS AROUND </b></p>
            <h1>OUR<span> BLOG</span></h1>
           </div>
            <Row xs={1} md={2} lg={3} className="g-4">

            {/* ----------------card 1 ---------------- */}
            <Col>
                <Card as="div">
                <div className="img_div">
                <Card.Img variant="top" src="https://i.ibb.co/5nc3kj2/blog4.jpg" className="img_blog"/>
                </div>
                <Card.Body style={{textAlign: 'justify'}}>
                    <Card.Text>By Ram | January 31, 2020 | 2 Comments</Card.Text>
                    <Card.Title>CREATORS OF THE MAN MADE WATCHES</Card.Title>
                    <Card.Text>
                    Welcome to WatchTime’s blog – the watch collector’s daily resource for the latest news on watches and the watch industry. 
                    </Card.Text>
                    <Card.Text>Casio Rolex</Card.Text>
                    <ButtonGroup className="buttonGrp">Read More</ButtonGroup>
                </Card.Body>
                </Card>
            </Col>

            {/* --------------------card 2 ------------------ */}
            <Col>
                <Card as="div">
                <div className="img_div">
                <Card.Img variant="top" src="https://i.ibb.co/YNd61Kq/blog12.jpg" className="img_blog"/>
                </div>
                <Card.Body style={{textAlign: 'justify'}}>
                    <Card.Text>By Ram | January 31, 2020 | 2 Comments</Card.Text>
                    <Card.Title>A LUBRICANT-FREE WATCH FOR PERFECT MEN</Card.Title>
                    <Card.Text>
                    Welcome to WatchTime’s blog – the watch collector’s daily resource for the latest news on watches and the watch industry. 
                    </Card.Text>
                    <Card.Text>Casio Titanic</Card.Text>
                    <ButtonGroup className="buttonGrp">Read More</ButtonGroup>
                </Card.Body>
                </Card>
            </Col>

            {/*--------------- card 3 ------------ */}
            <Col>
                <Card as="div">
                <div className="img_div">
                <Card.Img variant="top" src="https://i.ibb.co/KLWdzxZ/blog10-518c7ab0-ce3f-4092-a34a-be939cb0b851.jpg" className="img_blog"/>
                </div>
                <Card.Body style={{textAlign: 'justify'}}>
                    <Card.Text>By Ram | January 31, 2020 | 2 Comments</Card.Text>
                    <Card.Title>MODERN DIGITAL JUMP-SECONDS DISPLAY</Card.Title>
                    <Card.Text>
                    Welcome to WatchTime’s blog – the watch collector’s daily resource for the latest news on watches and the watch industry. 
                    </Card.Text>
                    <Card.Text>Rolex Titanic</Card.Text>
                    <ButtonGroup className="buttonGrp">Read More</ButtonGroup>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </div>
    );
};

export default Blog;