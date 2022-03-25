import React, { Component } from 'react';
import '../Style/global.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : null,
            quote : "",
            quote_obj : {}
        }
    }

    componentDidMount = () => {
        this.getQuote();
    }

    getQuote = () => {
        fetch('https://api.adviceslip.com/advice', {
            method: 'GET',
            cache: 'no-cache'
        }).then(res => res.json())
        .then(data => {
            this.setState({id : data.slip.id});
            this.setState({quote : data.slip.advice});
        });
    }
 
    render() {
        return (
            <div className='advice-wrapper'>
                <span id='adviceCount' role='text/QueueNumber'>advice #{this.state.id}</span>
                <p id='advicePh' role='text/Quote'>{this.state.quote}</p>
                <svg id="pattern-divider" xmlns="http://www.w3.org/2000/svg" width="444" height="16" viewBox="0 0 444 16">
                    <path id="Path_1" data-name="Path 1" d="M0,8H196V9H0ZM248,8H444V9H248Z" fill="#4f5d74" fillRule="evenodd"/>
                    <g id="Group_1" data-name="Group 1" transform="translate(212)">
                        <rect id="Rectangle_1" data-name="Rectangle 1" width="6" height="16" rx="3" fill="#cee3e9"/>
                        <rect id="Rectangle_2" data-name="Rectangle 2" width="6" height="16" rx="3" transform="translate(14)" fill="#cee3e9"/>
                    </g>
                </svg>
                <div className='dice-ph' role='button/newQuote' onClick={this.getQuote}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                </div>
            </div>
        );
    }
}
 
export default Body;