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
            <div className='menu'>
            <p> {Messages.small}</p><p>{Messages.large}</p>
            </div>
            <div className='menu'>
            <p> {Messages.smallSz}</p><p>{Messages.largeSz}</p>
            </div>
            <div className='menu'>
                <p> {Messages.item1 }</p><p>{Messages.item1sm}</p><p> {Messages.item1lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item2 } </p><p>{Messages.item2sm} </p><p>{Messages.item2lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item3 }</p><p> {Messages.item3sm}</p><p> {Messages.item3lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item4 }</p><p> {Messages.item4sm} </p><p>{Messages.item4lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item5 }</p><p> {Messages.item5sm}</p><p> {Messages.item5lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item6 }</p><p> {Messages.item6sm}</p><p>{Messages.item6lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item7 } </p><p>{Messages.item7sm}</p><p>{Messages.item7lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item8 } </p><p>{Messages.item8sm}</p><p>{Messages.item8lg}</p>
                </div>
                <div className='menu'>
                <p> {Messages.item9 } </p><p>{Messages.item9sm}</p><p>{Messages.item9sm}</p>
            </div>
            <br></br>
            <h1 className='footer'>{Messages.footer} </h1>    
        </div>
    )}