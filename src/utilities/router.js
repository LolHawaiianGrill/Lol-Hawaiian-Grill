import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../components/Home';

export const Router = () => (
    <Switch>
        <Route path='/' component={Home} exact />
    </Switch>
);