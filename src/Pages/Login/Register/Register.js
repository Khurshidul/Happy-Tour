import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleUserName, toggleLogin,  handleEmailChange,  handlePassword,  handleSubmitbtn,  handleResetPassword,name, isLogin,error} =useAuth();

    return (
        <div>
            <h1 className="text-danger">Please {isLogin ? "Login." : "Register."}</h1>
            <form onSubmit={handleSubmitbtn}>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-2 form-label">Name {name}</label>
                    <div className="col-sm-10">
                        <input onBlur={handleUserName} type="text" className="form-control" id="inputAddress" placeholder="Enter Your Name" required />
                    </div>
                </div>}

                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div>
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">

                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Register?
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button>

            </form>
        </div>
    );
};

export default Register;