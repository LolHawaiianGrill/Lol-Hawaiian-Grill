import React from 'react';
import orderTakeout from '../assets/svg/order-takeout-button.svg';
import {Messages, menu, sandwhiches, sides, drinks} from '../constants/menu';
import ExpandedMenu from './expandedMenu.jsx'

export const Menu = () => {
    return(
        <div className='menu'>
            <div className='imgPlaceholder'>
                <img src={'../assets/svg/menu thumbnail.jpg'} alt=''/>
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
            <div className='platesMenu'>
                {sandwhiches.map(item => {
                    return (
                        <div className='menuItem' key={item.title}>
                            <div className='topRow'>
                                <p>{item.title}</p>
                                <div className='prices'>
                                    <p>{}</p>
                                    <p>{item.regular}</p>
                                </div>
                            </div>
                            <p className='description'>{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className='plates'>
                <p style={{textAlign:'center'}}className='platesHeader'>DAILY <br/> SPECIALS</p>
            </div>
            <div>
                <ExpandedMenu/>
            </div>
            <div className='plates'>
                <p className='platesHeader'>SIDES</p>
            </div>
            <div className='platesMenu'>
                {sides.map(item => {
                    return (
                        <div className='menuItem' key={item.title} style={{height: '40px'}}>
                            <div className='topRow'>
                                <p style={{marginLeft:'30px'}}>{item.title}</p>
                                <div className='prices'>
                                    <p>{}</p>
                                    <p>{item.regular}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='plates'>
                <p className='platesHeader'>DRINKS</p>
            </div>
            <div className='platesMenu'>
                {drinks.map(item => {
                    return (
                        <div className='menuItem' key={item.title} style={{height: '40px'}}>
                            <div className='topRow'>
                                <p style={{marginLeft:'30px'}}>{item.title}</p>
                                <div className='prices'>
                                    <p>{}</p>
                                    <p>{item.regular}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='takeoutBtns'>
                <img src={orderTakeout} alt='btn'/>
                <img src={orderTakeout} alt='btn'/>
            </div>
        </div>
    )
}