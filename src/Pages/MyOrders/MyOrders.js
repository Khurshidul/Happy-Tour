import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
    const [order, setOrder] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch('https://intense-dusk-56006.herokuapp.com/myOrder')
        .then(res => res.json())
        .then(data => setOrder(data))
            
       
    },[]);
    const handleDelete = id => {
        const url = `https://intense-dusk-56006.herokuapp.com/myOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete?');

                    const remainingOrder = order.filter(singleOrder => singleOrder._id !== id);
                    setOrder(remainingOrder);

                }

            })
    }

    return (
        <div className="order-container">
            <h1 className="text text-warning">My Orders</h1>
            {
                order.map(order =><div
                key = {order._id}
                >
        
                    {
                        user.email === order.email ?
                            <div className="container">
                                <div className="row manage-order">
                                    <div className="col">
                                        <h6>{order.name}</h6>
                                    </div>
                                    <div className="col">
                                        <h6>{order.email}</h6>
        
                                    </div>
                                    <div className="col">
                                        <h6>{order.service_name}</h6>
        
                                    </div>
                                    <div className="col">
                                        <h6>{order.phone}</h6>
        
                                    </div>
        
                                </div>
                                <div>
                                    <button  onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
        
                                </div>
                            </div>
                            :
                            <div>
                            </div>
                    }
        
                </div>)
            }
            
        </div>
    );
};

export default MyOrders;

