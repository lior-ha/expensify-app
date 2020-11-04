import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'; // 4.7.2

import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFountPage from '../components/NotFountPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            {/* <Header /> {/*Header won't get the route's props, because it was not set up as a compnent for a route */}
            <Switch>{/* Looks for the first match and stops */}
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFountPage} /> {/* 404 */}
            </Switch>
        </div>
    </Router>
)

export default AppRouter;