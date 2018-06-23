import * as React from 'react';
import {Messages} from '../constants/footer';

export const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='navBtns'>
                <p>Home</p>
                <div className='nav'>
                    <p>Menu</p>
                    <p>Locations</p>
                    <p>Catering</p>
                    <p>About</p>
                </div>
            </div>
            <div className='copyWrite'>
            <p>{Messages.title}</p>
            <p>{Messages.design}</p>
            </div>
        </div>
    )
}