import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import './Admin.css';
const Admin = () => {
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('https://intense-dusk-56006.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, [])
    return (
        <div>

            <h1>Our Admin panel.</h1>
            <div className="admin-panel">
                {
                    admins.map(admin => <AdminPanel
                        key={admin._id}
                        admin={admin}
                    ></AdminPanel>)
                }


            </div>


        </div>
    );
};

export default Admin;