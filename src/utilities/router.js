import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { About } from '../components/About';
import { Location } from '../components/Location';
import { Catering } from '../components/Catering';


export const Router = () => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/Location' component={Location} />
        <Route path='/Catering' component={Catering}/>
    </Switch>
);