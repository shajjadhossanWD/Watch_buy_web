import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './ReviewsProducts.css';

const ReviewsProducts = () => {
    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://floating-beach-19439.herokuapp.com/review", data)
       .then(res => {
           if(res.data.insertedId){
               alert('Reviewed successfully')
               reset();
           }
       })
     }
    return (
        <div>
          <div className="dashboard_div">
              <h1 className="text-white">REVIEW OUR PRODUCT..</h1>
          </div>
           <div className="review_div my-5">
           <h1 className="text-white">YOUR REVIEWS..</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
              <input className="inputData" {...register("userName")} type="text" value={user.displayName || ''}/>
              <input className="inputData" {...register("email")} value={user.email || ''}/>
              <input className="inputData" {...register("img")} value={user.photoURL || ''}/>
              <textarea className="inputData" {...register("description")} type="description" placeholder="write your comments" />
              <input className="inputData" {...register("ratings")} type="number" placeholder="rating"/>
              <input className="inputData buttonGrp" type="submit" />   
           </form>
           </div>
        </div>
    );
};

export default ReviewsProducts;