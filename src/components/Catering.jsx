import * as React from 'react';
import catering from '../assets/images/Catering.svg';
import { Messages } from '../constants/catering';

export const Catering = () =>  {
        return (
        <div className="catering">
            <img src={catering} alt={"catering-food"}/>
            <h1 className="catering-text">{ Messages.header }</h1>
                <p> {Messages.item1 }</p>
            <br></br>
            <h1 className='footer'>{Messages.footer} </h1>    
        </div>
    )}