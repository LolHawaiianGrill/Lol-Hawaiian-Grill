import * as React from 'react';
import catering from '../assets/images/bitmap.jpg';
import order from '../assets/images/order-catering.png'
import { Messages } from '../constants/catering';

export const Catering = () =>  {
        return (
        <div className="catering">
            <img className='catering-food' src={catering} alt={"catering-food"}/>
                <img className='order' src={order} alt={"catering"}/>
            <br></br>
            <div className='labels-container'>
             <p>{Messages.small}</p><p>{Messages.large}</p>
             <br></br>
             <br></br>
             </div>
             <div className='sizes-container'>
             <p className='size'>{Messages.smallSz}</p><p className='size'>{Messages.largeSz}</p>
            </div>
            <div className='menu-container'>
            <div className='menu'>
                 {Messages.item1 }
                <br></br>
                <br></br>
                 {Messages.item2 }
                 <br></br>
                 <br></br>
                 {Messages.item3 } 
                 <br></br>
                 <br></br>
                 {Messages.item4 } 
                 <br></br>
                 <br></br>
                 {Messages.item5 } 
                 <br></br>
                 <br></br>
                 {Messages.item6 } 
                 <br></br>
                 <br></br>
                 {Messages.item7 } 
                 <br></br>
                 <br></br>
                 {Messages.item8 } 
                 <br></br>
                 <br></br>
                 {Messages.item9 } 
            </div>
            <div className='small-prices'>
            {Messages.item1sm} 
            <br></br>
            <br></br>
            {Messages.item2sm} 
            <br></br>
            <br></br>
            {Messages.item3sm} 
            <br></br>
            <br></br>
            {Messages.item4sm} 
            <br></br>
            <br></br>
            {Messages.item5sm} 
            <br></br>
            <br></br>
            {Messages.item6sm}
            <br></br>
            <br></br>
            {Messages.item7sm}
            <br></br>
            <br></br>
            {Messages.item8sm}
            <br></br>
            <br></br>
            {Messages.item9sm}
            </div>
            <div className='large-prices'>
            {Messages.item1lg}
            <br></br>
            <br></br>
            {Messages.item2lg}
            <br></br>
            <br></br>
            {Messages.item3lg}
            <br></br>
            <br></br>
            {Messages.item4lg}
            <br></br>
            <br></br>
            {Messages.item5lg}
            <br></br>
            <br></br>
            {Messages.item6lg}
            <br></br>
            <br></br>
            {Messages.item7lg}
            <br></br>
            <br></br>
            {Messages.item8lg}
            <br></br>
            <br></br>
            {Messages.item9sm}
            </div>
            </div>
            <br></br>
            <h1 className='footer'>{Messages.footer} </h1>    
        </div>
    )}