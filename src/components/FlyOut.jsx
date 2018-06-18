import * as React from 'react';
import exit from '../assets/svg/cancel.svg';
import logo from '../assets/svg/LOL.svg';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

export const FlyOut = (props) => {
    return(
        <Drawer
            className='drawer'
            open={props.toggle}
        >
            <div className='flyout'>
                <img className='flyoutClose' onClick={props.toggleClose} src={exit} alt='x' />
                <div className='contentContainer'>
                    <img  className='logo' src={logo} alt='logo' />
                    <ul>
                        <li>Menu/Order</li>
                        <Link to='location'><li>Locations</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <li>Catering</li>
                    </ul>
                </div>
            </div>
        </Drawer>
    )
}