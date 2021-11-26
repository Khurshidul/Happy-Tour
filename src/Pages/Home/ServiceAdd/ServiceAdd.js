import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import './ServiceAdd.css';
const ServiceAdd = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        
        console.log(data)
        axios.post('https://intense-dusk-56006.herokuapp.com/services', data)
        .then(res =>{
            console.log(res);
            if(res.data.insertedId){

                alert('Successfully inserted your data.');
                reset();

            }
        })
    };
    return (
        <div className="add-service">
      <h2 className="">Add Service.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("service_name", { required: true, maxLength: 20 })} placeholder="Name" />
          <textarea {...register("description")} placeholder="Description" />
          <input {...register("img")} type="input" placeholder="Image" />
          <input type="submit" />
      </form>
  </div>
    );
};

export default ServiceAdd;