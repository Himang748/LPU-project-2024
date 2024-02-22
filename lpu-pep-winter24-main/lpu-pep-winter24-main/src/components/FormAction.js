// FormAction.js
import React, { useState } from 'react';

const FormAction = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div>
            <h2>FormAction Component</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" name="age" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormAction;
