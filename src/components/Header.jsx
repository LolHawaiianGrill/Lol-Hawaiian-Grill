import * as React from 'react';
import { Link } from 'react-router-dom';
import { FlyOut } from './FlyOut';
import watermark from '../assets/svg/lol-word-mark.svg';
import menu from '../assets/svg/menu.svg';

export default class Header extends React.Component{
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
            <div className='header'>
                <FlyOut toggle={this.state.drawerStatus} toggleClose={this.toggleDrawer}/>
                <img onClick={this.toggleDrawer} className='menu' src={menu} alt='menu'/>
                <Link to='/'><img className='logo' src={watermark} alt='logo'/></Link>
            </div>
        );
    }
}