import React from 'react';
import { ButtonGroup, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel fade interval={1500}>
        <Carousel.Item className="carousel_about">
            <img
            className="d-block w-100  carouselImg"
            src="https://i.ibb.co/Dr6ZP53/slider1.jpg"
            alt="First slide"
            />  
            <Carousel.Caption className="carousel_about">
            <h1 className="text-white">THE WATCH EVERYONE</h1>
            <h1 className=" mx-auto">DESIRE</h1>
            <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
            <Link to="/all_watch">
              <p><ButtonGroup className="banner_btn">SHOP NOW</ButtonGroup></p>
            </Link>
            </Carousel.Caption>
        </Carousel.Item>   
        <Carousel.Item>
            <img
            className="d-block w-100  carouselImg"
            src="https://i.ibb.co/tzpg6YL/slider2.jpg"
            alt="Second slide"
            />

            <Carousel.Caption className="carousel_about">
            <h1 className="text-white"> AN EXTRAORDINARY</h1>
            <h1 className=" mx-auto">CLASSIC</h1>
            <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
            <Link to="/all_watch">
              <p><ButtonGroup className="banner_btn">SHOP NOW</ButtonGroup></p>
            </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 carouselImg"
            src="https://i.ibb.co/Cz5QqqP/slide-3.jpg"
            alt="Third slide"
            />

            <Carousel.Caption className="carousel_about">
            <h1 className="text-white">WATCH FOR HIGH-TECH</h1>
            <h1 className=" mx-auto">PEOPLE</h1>
            <p>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory </p>
            <Link to="/all_watch">
              <p><ButtonGroup className="banner_btn">SHOP NOW</ButtonGroup></p>
            </Link>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    );
};

export default Banner;