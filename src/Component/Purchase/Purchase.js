import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../CommonParts/Header/Header';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import './Purchase.css';

const Purchase = () => {
    const {productName} = useParams();
    const [SingleProducts, setSingleProducts] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => {
            const WatchData = data.find(product => product.name === productName)
            setSingleProducts(WatchData);
        })
     },[productName])

    return (
        <>
        <Header></Header>
        <div className="purchase_page">
            <h1>this is private page purchase</h1>

            <div className="row">
               <div className="col-lg-6">
                   <img src={SingleProducts.img} style={{width: '60%'}} alt="" />
               </div>
               <div className="col-lg-6 text-white" style={{textAlign: 'start'}}>
                  <h1>{SingleProducts.name}</h1>
                  <p>{SingleProducts.description}</p>
                  <h1>$ {SingleProducts.price} Only</h1>
                  <p><small>Upto 30% discount</small></p>
                  <h4>Stock : {SingleProducts.available}</h4>
                  <div className="modal_btn">
                  <Button className="buttonGrp" onClick={() => setModalShow(true)}>Purchase Now</Button>
                   
                    <PurchaseModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                  </div>
               </div>
            </div>
        </div>
        </>
    );
};

export default Purchase;