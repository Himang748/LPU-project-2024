// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import FormAction from './FormAction';

const App = () => {
    const [user, setUser] = useState({});

    const handleFormSubmit = (formData) => {
        setUser(formData);
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/form">
                        <FormAction onSubmit={handleFormSubmit} />
                    </Route>
                    <Route path="/">
                        <Home user={user} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
