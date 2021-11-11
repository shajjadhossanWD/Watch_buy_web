import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://floating-beach-19439.herokuapp.com/watches", data)
       .then(res => {
           if(res.data.insertedId){
               alert('added product successfully')
               reset();
           }
       })
     }
    return (
        <div>
            <div className="dashboard_div">
                <h1 className="text-white">Add Your New Product</h1>
                <div className="w-75 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="inputData" placeholder="your product name" {...register("name")}/>
                    <textarea className="inputData" placeholder="your product short description" {...register("short_des")}/>
                    <textarea className="inputData" {...register("description")} placeholder="product details description" />
                    <input className="inputData" placeholder="product image url" {...register("img")} />
                    <input className="inputData" placeholder="product price" type="number" {...register("price")} />
                    <input className="inputData" type="number" placeholder="In stock product count" {...register("available")} />
                    <input className="inputData buttonGrp" type="submit" />
                </form>
        
                </div>
            </div>
        </div>
    );
};

export default AddProduct;