import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./styles/styles.css"

function Signup() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name, email, password})
            .then(result => { console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="signin">
            <div className="signin-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">
                            Name
                        </label>
                        <input
                            type="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                            type="Password"
                            placeholder="Enter Password"
                            name="Password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">
                        register
                    </button>
                </form>
                <p>Alredy heve account</p>

                <Link to="/login" className="button2">
                    Login
                </Link>

            </div>
        </div>
    );
};

export default Signup;