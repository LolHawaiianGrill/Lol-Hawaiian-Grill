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
            <div className='titleContainer'>
                    <p className='title'>ALOHA</p>
                    <p>{Messages.satisfy}</p>
                </div>
                <img style={{width: '100%', height: '210px;'}} src={require('../assets/images/Poly Plate.svg')} alt='img'/>
                <p>{Messages.polyPlates}</p>
            </div>
            <div className='one'>
                <div className='titleContainer'>
                    <p className='title'>OHANA</p>
                    <p>{Messages.family}</p>
                </div>
                <img style={{width: '100%', height: '210px;'}} src={require('../assets/images/Food Truck Shaka.svg')} alt='img'/>
            </div>
            <div className='one'>
            <div className='titleContainer'>
                    <p className='title'>LUAU</p>
                    <p>{Messages.crowd}</p>
                </div>
                <img src={require('../assets/images/Catering.svg')} alt='img' style={{width: '100%', height: '210px;'}}/>
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