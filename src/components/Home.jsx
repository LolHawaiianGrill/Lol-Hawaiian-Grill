import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            drawerStatus: false
        }
    };

    toggleDrawer = () => {
        this.setState({drawerStatus: true})
    }

    render(){
        console.log(this.state.drawerStatus)
        return(
            <div>
                <div className='btn' onClick={this.state.toggleDrawer}>click for flyout</div>
                <Drawer open={this.state.drawerStatus}>this is the drawer</Drawer>
            </div>
        );
    }

};

