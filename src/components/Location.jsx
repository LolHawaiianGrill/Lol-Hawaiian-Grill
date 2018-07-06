import * as React from 'react';
import { Messages } from '../constants/location';
import building from '../assets/images/locations.jpg';
import truck from '../assets/images/foodTruck.jpg';
import getDirections from '../assets/images/getDirections.png';
import checkSchedule from '../assets/images/check-the-schedule-button.png';
import facebook from '../assets/svg/facebook.svg'; 

export const Location = (props) => {
        return (
        <div className='location'>
            <img className='image' src={building} alt="Location Building"/>
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
            <div className='hours-container'>
            <div className='days'>
                {Messages.Mon}    
                <br></br>
                {Messages.Tues}    
                <br></br>
                {Messages.Wed}   
                <br></br>
                {Messages.Thurs}    
                <br></br>
                {Messages.Fri}      
                <br></br>
                {Messages.Sat}    
                <br></br>
                {Messages.Sun}      
                <br></br>
            </div>
            <div className='hours'>
            {Messages.hours}
            <br></br>
            {Messages.hours}
            <br></br>
            {Messages.hours}
            <br></br>
            {Messages.hours}
            <br></br>
            {Messages.hours}
            <br></br>
            {Messages.SatHours}
            <br></br>
            {Messages.closed}
            </div>
            </div>
            <br></br>
            <img className='directions' src={getDirections} alt='get directions'/>
            <br></br>
            <img className='image' src={truck} alt="Food Truck"/>
            <br></br>
            <h4>{Messages.food}</h4>
            <br></br>
            <p> {Messages.paragraph1}</p>
            <br></br>
            <div className='schedule-container'>
                <img className='schedule' src={checkSchedule} alt="Food Truck"/>
                <img className='fb' src={facebook} alt='facebook'/>
            </div>
            <br></br>
                </div>
    )}
