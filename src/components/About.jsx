import * as React from 'react';
import family from '../../src/assets/images/ToleafoaFamily.jpg';
import mahalo from '../assets/images/mahalo-plenny.png'
import { Messages } from '../constants/about';

export const About = () =>  {
        return (
        <div className="about">
            <img className='family' src={family} alt="Toleafoa Family"/>
            <h1 className="about-text">{ Messages.header }</h1>
                <p> {Messages.paragraph1 }</p>
            <br></br>
                <p> { Messages.paragraph2 }</p>
            <br></br>
                <p>{ Messages.paragraph3 }</p>
            <br></br>
                <p> { Messages.paragraph4 }</p>
            <br></br>
                <p>{ Messages.paragraph5 } </p>
            <br></br>
            <img className='mahalo' src={mahalo} alt="mahalo"/>
        </div>
    )}
