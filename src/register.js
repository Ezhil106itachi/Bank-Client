import React, { useState } from "react";
import axios from 'axios';
import "./reg.css"; // Import the CSS

export default function Register() {
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let item = { name: Name, email: Email, password: pass, amount: 1000 };
        axios.post('https://bank-server-sj7o.onrender.com/create', item)
            .then(() => alert("Submitted Successfully"))
            .catch(err => console.error("Error:", err));
    }

    return (
        <div className="register-container">
            <h1 className="register-heading">Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
