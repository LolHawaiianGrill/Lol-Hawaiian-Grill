import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { FlyOut } from './FlyOut';

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            drawerStatus: false
        }
    };

    toggleDrawer = () => {
        this.setState({drawerStatus: !this.state.drawerStatus})
    }

    render(){
        return(
            <div className='home'>

            </div>
        );
    }

};

