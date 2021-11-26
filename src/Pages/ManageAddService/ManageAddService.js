import React, { useEffect, useState } from 'react';
import './ManageService.css';

const ManageAddService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-dusk-56006.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const handleDelete = id => {
        const url = `https://intense-dusk-56006.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete?');

                    const remainingServices = services.filter(service => service._id !== id);
                    setServices(remainingServices);

                }

            })
    }
    return (
        <div className="manage-services">
            <h1>Manage services</h1>
            {
                services.map(service => <div key={service._id}>

                    <div className="card add-service-card">
                        <img src={service.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <button className="btn btn-primary" onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default ManageAddService;