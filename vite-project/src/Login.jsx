import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./styles/styles.css"


function Login() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/login', {email, password})
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                    console.log(result.data)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="signin">
            <div className="signin-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
                <p>Alredy heve account</p>

                <Link to="/register" className="button2 ">
                    Sign in
                </Link>

            </div>
        </div>
    );
};

export default Login;