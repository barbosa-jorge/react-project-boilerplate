import React from 'react';
import { Router, Switch } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch >
                <PublicRouter path="/" component={LoginPage} exact={true} />
                <PrivateRouter path="/dashboard" component={DashboardPage} />
                <PublicRouter component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;