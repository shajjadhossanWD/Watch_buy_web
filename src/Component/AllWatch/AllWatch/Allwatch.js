import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../CommonParts/Footer/Footer';
import Header from '../../CommonParts/Header/Header';
import SingleWatch from '../SingleWatch/SingleWatch';
import './Allwatch.css';

const Allwatch = () => {
    const [watches, setWatches] = useState([]);

    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/watches')
        .then(res => res.json())
        .then(result =>{
            setWatches(result)
        })
    },[])

    return (
        <div>
            <Header/>
            <div className="collection_img">
                <h1 className="text-white">COLLECTION</h1>
            </div>
            <div className="cards_title">
            <h1><span>ALL WATCH</span> ARE HERE</h1>
            </div>
             <div className="mb-5">
             <Row xs={1} md={2} lg={3} className="g-4 container mx-auto" >
                {
                  watches.map(watch => <SingleWatch key = {watch._id} watch = {watch}></SingleWatch>)
                }
            </Row>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Allwatch;