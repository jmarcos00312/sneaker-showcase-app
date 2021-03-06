import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm({ setCurrentUser }) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        password: "",
        username: "",
        email: "",
        admin: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        fetch("api/signup", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    console.log(user);
                    setCurrentUser(user);
                    setFormData({
                        first_name: "",
                        last_name: "",
                        password: "",
                        username: "",
                        email: "",
                        admin: false,
                    })
                    window.location.reload(false)
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    };
    return (
        <div className="formContainer">
            {/* <h1>NOT LOGGED IN</h1> */}
            <form onSubmit={handleSubmit} className="form">
                <h1>Create Account</h1>
                <label>
                    First Name:
                    <input
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Last Name:
                    <input
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        required />
                </label>
                <input type="submit" value="send" />
            </form>
        </div>
    );
}

export default SignupForm;
