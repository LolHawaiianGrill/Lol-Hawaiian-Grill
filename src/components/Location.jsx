import * as React from 'react';
import { Messages } from '../constants/location';
import building from '../assets/images/LocationsBuiilding.svg';
import truck from '../assets/images/LocationsTruck.svg';

export const Location = (props) => {
        return (
        <div className='location'>
            <img src={building} alt="Location Building"/>
            <h1>{Messages.header}</h1>
            <h4>{Messages.location1}</h4>
            <br></br>
                <p> 
                {Messages.address1}
                    <br></br>
                {Messages.cityState1}
                </p>
                <br></br>
            <h4>{Messages.phone1}</h4>
            <br></br>
            <p>
                {Messages.Mon}    {Messages.hours}
                <br></br>
                {Messages.Tues}    {Messages.hours}
                <br></br>
                {Messages.Wed}   {Messages.hours}
                <br></br>
                {Messages.Thurs}    {Messages.hours}
                <br></br>
                {Messages.Fri}      {Messages.hours}
                <br></br>
                {Messages.Sat}    {Messages.SatHours}
                <br></br>
                {Messages.Sun}      {Messages.closed}
                <br></br>
            </p>
            <br></br>
            <button>{Messages.directions}</button>
            <br></br>
            <img src={truck} alt="Food Truck"/>
            <br></br>
            <h4>{Messages.food}</h4>
            <br></br>
            <p> {Messages.paragraph1}</p>
            <br></br>
            <button>{Messages.schedule}</button>
            <br></br>
                </div>
    )}
