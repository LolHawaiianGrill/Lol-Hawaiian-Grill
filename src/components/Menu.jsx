import React from 'react';
import orderTakeout from '../assets/svg/order-takeout-button.svg';
import {Messages, menu} from '../constants/menu';

export const Menu = () => {
    return(
        <div className='menu'>
            <div className='imgPlaceholder'>
                <p>MENU</p>
            </div>
            <div className='takeoutBtns'>
                <img src={orderTakeout} alt='btn'/>
                <img src={orderTakeout} alt='btn'/>
            </div>
            <div className='plates'>
                <p className='platesHeader'>{Messages.header}</p>
                <p className='subHeader'>{Messages.subHeader}</p>
            </div>
            <div className='platesMenu'>
                {menu.map(item => {
                    return (
                        <div className='menuItem' key={item.title}>
                            <div className='topRow'>
                                <p>{item.title}</p>
                                <div className='prices'>
                                    <p>{item.mini}</p>
                                    <p>{item.regular}</p>
                                </div>
                            </div>
                            <p className='description'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className='plates'>
                <p className='platesHeader'>SANDWHICHES</p>
                <p className='subHeader'>{Messages.subHeader}</p>
            </div>
        </div>
    )
}