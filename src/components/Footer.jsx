import * as React from 'react';
import {Messages} from '../constants/footer';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='navBtns'>
                <Link to='/'><p>Home</p></Link>
                <div className='nav'>
                    <Link to='/Menu'><p>Menu</p></Link>
                    <Link to='/Location'><p>Locations</p></Link>
                    <p>Catering</p>
                    <Link to='/about'><p>About</p></Link>
                </div>
            </div>
            <div className='copyWrite'>
                <p>{Messages.title}</p>
                <p>{Messages.design}</p>
            </div>
        </div>
    )
}