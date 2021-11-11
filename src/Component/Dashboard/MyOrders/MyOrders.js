import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteOrders, setDeleteOrders] = useState();
    const {user} = useAuth();

    const email = user.email;
    useEffect(()=>{
        fetch(`http://localhost:5000/OrderedProduct/${email}`)
        .then(res => res.json())
        .then(result => {
           setOrders(result)
        })
    },[email, deleteOrders]) 

    const handleDelete =(id)=>{
        const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
        if(confirmDelete){
           fetch(`http://localhost:5000/OrderedProduct/${id}`,{
               method: "DELETE",
               headers: {"content-type": "application/json"}
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
       
    return (
        <div>
           <div className="dashboard_div">
             <h1>MY ALL ORDERS..</h1>
           </div>
            
            <div className="orders my-5 container mx-auto">
                <h1>MY ORDERS</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {
                      orders.map(order => <Order 
                      key={order._id} 
                      order={order}
                      handleDelete = {handleDelete}
                      >
                      </Order>)
                  }
                </Row>
            </div>
        </div>
    );
};

export default MyOrders;