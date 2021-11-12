import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrder from './ManageOrder/ManageOrder';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
   const [data, setData] = useState([]);
   const [deleteOrders, setDeleteOrders]= useState()
    useEffect(()=>{
        fetch('https://floating-beach-19439.herokuapp.com/OrderedProduct')
        .then(res => res.json())
        .then(data => {
            setData(data)
            // console.log(data)
        })

    },[deleteOrders])


    const handleOrderDelete = (id) =>{
        const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
        if(confirmDelete){
           fetch(`https://floating-beach-19439.herokuapp.com/OrderedProduct/${id}`, {
               method: 'DELETE',
               headers:{"content-type": "application/json"}
           })
           .then(res => res.json())
           .then(result =>{
            if(result.deletedCount > 0){
                alert('deleted successfully')
                setDeleteOrders(result)
            } 
        })
    
        }
       }


    const handleShippedBtn = (id) =>{
        axios.put(`https://floating-beach-19439.herokuapp.com/OrderedProduct/${id}`)
        .then(res =>{
           if(res.data.modifiedCount){
               let ShippedStatus = []
               data.forEach(product =>{
                   if(product._id === id){
                       product.status = 1 
                       ShippedStatus.push(product)
                   }
                   else{
                       ShippedStatus.push(product)
                   }
               })
               setData(ShippedStatus);
           }
        })

    }

    return (
        <div>
           <div className="dashboard_div">
               <h1 className="text-white">MANAGE ALL ORDERED PRODUCTS</h1>
           </div>
           <div>
           <h1 className="my-5 cards_title"> ALL <span>ORDERED PRODUCTS</span></h1>
           <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                {
                    data.map(manageOrder => <ManageOrder
                     key={manageOrder._id} 
                     manageOrder={manageOrder}
                     handleShippedBtn={handleShippedBtn}
                     handleOrderDelete={handleOrderDelete}
                     ></ManageOrder>)
                }
           </Row>
           </div>
        </div>
    );
};

export default ManageAllOrders;