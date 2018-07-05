import * as React from 'react';
import { Link } from 'react-router-dom';
import {Messages} from '../constants/home';
import locationsBtn from '../assets/svg/locations-button.svg';
import menuBtn from '../assets/svg/menu-button.svg';
import facebook from '../assets/svg/facebook.svg';
import instagram from '../assets/svg/instagram.svg';
import cateringBtn from '../assets/svg/catering-info-button.svg';

export const Home = () => {
    return(
        <div className='home'>
            <div className='picContainer'>
                <p>ONO-LICIOUS</p>
            </div>
            <div className='buttons'>
                <Link to='/'><img src={menuBtn} alt='meunBtn' /></Link>
                <Link to='/'><img src={locationsBtn} alt='locations'/></Link>
            </div>
            <div className='one'>
                <p className='title'>ALOHA</p>
                <p>{Messages.satisfy}</p>
                <div className='placeholder'></div>
                <p>{Messages.polyPlates}</p>
            </div>
            <div className='one'>
                <p className='title'>OHANA</p>
                <p>{Messages.family}</p>
                <div className='placeholder'></div>
            </div>
            <div className='one'>
                <p className='title'>LUAU</p>
                <p>{Messages.crowd}</p>
                <div className='placeholder'></div>
                <img src={cateringBtn} alt='cateringBtn' className='cateringBtn'/>
            </div>
            <div className='socialMedia'>
                <p className='connect'>Connect With Us</p>
                <div>
                    <img src={facebook} alt='fb'/>
                    <img src={instagram} alt='insta'/>
                </div>
            </div>
        </div>
    )
}