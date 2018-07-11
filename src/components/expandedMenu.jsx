import React from 'react';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {} from '../constants/expandedMenu.js';

export default class ExpandedMenu extends React.Component {
    constructor(){
        super();
        this.state={
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
        }
    }

    open = (txt) => {
        // console.log('opened', day)
        if(txt === 'tuesday'){
            this.setState({tuesday: true})
            document.getElementById('tuesdayInfo').style.display='flex';
        }else if(txt === 'wednesday'){
            this.setState({wednesday: true})
            document.getElementById('wednesdayInfo').style.display='flex';
        }
    }

    close = (txt) => {
        if(txt === 'tuesday'){
            this.setState({tuesday: false})
            document.getElementById('tuesdayInfo').style.display='none';
        }
    }

    render(){
        console.log('state', this.state.tuesday)
        return(
            <div>
                <div className='day'>
                    <div className='header'>
                        <p>TUESDAY</p>
                        {this.state.tuesday ? null : <img alt=''onClick={e => this.open('tuesday')} src={require('../assets/svg/shape-copy.svg')}/> }
                    </div>

                    <div id='tuesdayInfo'>
                        THIS IS TUESDAY
                    </div>
                </div>

                <div className='day'>
                    <div className='header'>
                        <p>WEDNESDAY</p>
                        {!this.state.wednesday ? <img alt='' src={require('../assets/svg/shape-copy.svg')}/> : <img onClick={e => this.open('wednesday')} alt='' src={require('../assets/svg/shape-copy-4.svg')}/>}
                    </div>
                    <div id='wednesdayInfo'>
                        THIS IS wed
                    </div>
                </div>

                <div className='day'>
                    <div className='header'>
                        <p>THURSDAY</p>
                        {!this.state.thursday ? <img alt='' src={require('../assets/svg/shape-copy.svg')}/> : <img alt='' src={require('../assets/svg/shape-copy-4.svg')}/>}
                    </div>
                    <div id='thursdayInfo'>
                        THIS IS thur
                    </div>
                </div>

                <div className='day'>
                    <div className='header'>
                        <p>FRIDAY</p>
                        {!this.state.friday ? <img alt='' src={require('../assets/svg/shape-copy.svg')}/> : <img alt='' src={require('../assets/svg/shape-copy-4.svg')}/>}
                    </div>
                    <div id='fridayInfo'>
                        THIS IS fri
                    </div>
                </div>

                <div className='day'>
                    <div className='header'>
                        <p>SATURDAY</p>
                        {!this.state.saturday ? <img alt='' src={require('../assets/svg/shape-copy.svg')}/> : <img alt='' src={require('../assets/svg/shape-copy-4.svg')}/>}
                    </div>
                    <div id='saturdayInfo'>
                        THIS IS sat
                    </div>
                </div>
            </div>
        );
    }
}