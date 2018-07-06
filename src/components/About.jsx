import * as React from 'react';
import family from '../../src/assets/images/ToleafoaFamily.jpg';
import mahalo from '../assets/images/mahalo-plenny.png';
import about from '../assets/images/about.png';
import { Messages } from '../constants/about';

export const About = () =>  {
        return (
        <div className="about">
            <img className='family' src={family} alt="Toleafoa Family"/>
            <img className="about-text"src={about} alt='about'/>
            <div className='about-container'>
                <p> {Messages.paragraph1 }</p>
            <br></br>
                <p> { Messages.paragraph2 }</p>
            <br></br>
                <p>{ Messages.paragraph3 }</p>
            <br></br>
                <p> { Messages.paragraph4 }</p>
            <br></br>
            </div>
            <img className='mahalo' src={mahalo} alt="mahalo"/>
        </div>
    )}
