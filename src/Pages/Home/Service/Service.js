import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Service = ({service}) => {
    const {_id,service_name,img, description} = service;
    return (
        <div className="single-service">
           <img src={img} alt="" />
            <br /><br />
            <h2>{service_name}</h2>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary">Book Now <i className="far fa-arrow-alt-circle-right"></i></button>
            </Link>
        </div>
    );
};

export default Service;