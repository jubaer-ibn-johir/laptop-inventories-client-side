import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('./login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}> 
                <input type="text" name='name' placeholder='Your Name'/> <br/>
                <input type="email" name='email' placeholder='Email Address'/> <br/>
                <input type="password" name='password' placeholder='Password'/> <br/>
                <input type="submit" value="Register" />
            </form>
            <p className="mt-2">Already have an account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;