import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const location = useLocation()
    console.log(location);
 
    
    return (
        <div>
            <h1>Google Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
            <h1>Login with email.</h1>
            <Nav.Link as={Link} to="/register">
                                <Button className="login" variant="outline-primary">Login</Button>
                            </Nav.Link>
            
        </div>
    );
};

export default Login;