import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { About } from '../components/About';
import { Location } from '../components/Location';

export const Router = () => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/Location' component={Location} />
    </Switch>
);