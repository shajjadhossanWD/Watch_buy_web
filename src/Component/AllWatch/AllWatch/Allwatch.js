import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
            <h1>all watch is here</h1>

            <Row xs={1} md={2} lg={3} className="g-4 container mx-auto" >
                {
                  watches.map(watch => <SingleWatch key = {watch._id} watch = {watch}></SingleWatch>)
                }
            </Row>
        </div>
    );
};

export default Allwatch;