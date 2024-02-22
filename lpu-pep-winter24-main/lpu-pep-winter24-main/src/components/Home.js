// Home.js
import React from 'react';

const Home = ({ user }) => {
    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
        </div>
    );
};

export default Home;
