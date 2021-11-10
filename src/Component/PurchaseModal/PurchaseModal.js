import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PurchaseModal.css';

const PurchaseModal = (props) => {
    const {user} = useAuth();
    const {productName} = useParams();
    const [SingleProducts, setSingleProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data => {
            const WatchData = data.find(product => product.name === productName)
            setSingleProducts(WatchData);
        })
     },[productName])   

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/OrderedProduct", data)
       .then(res => {
           if(res.data.insertedId){
               alert('added successfully')
               reset();
           }
       })
     }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton style={{backgroundColor: 'black', color: 'white'}}>
                <Modal.Title id="contained-modal-title-vcenter" >
                Your Order Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: 'black'}}>

               <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="inputData" {...register("name")} value={user.displayName || ''}/>
                    <input className="inputData" {...register("email")} value={user.email || ''}/>
                    <input className="inputData" {...register("phone")} placeholder="phone number" />
                    <input className="inputData" {...register("address")} placeholder="your current address"/>
                    <input className="inputData" {...register("bookingItems")} defaultValue={SingleProducts.name} />
                    <input className="inputData" {...register("itemsImg")} defaultValue={SingleProducts.img} />
                    <input className="inputData" type="number" {...register("Price")} defaultValue={SingleProducts.price} />
                    <input className="inputData buttonGrp" type="submit" />
                </form>
        
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: 'black'}}>
                <Button className="buttonGrp" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PurchaseModal;