import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
        isAuthenticated, 
        component: Component,
        ...rest
    }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header /> {/* Header won't get the route's props, because it was not set up as a compnent for a route */}
                <Component {...props} />
            </div>
            
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)