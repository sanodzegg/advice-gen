import React, { Component } from 'react';

class Body extends Component {
    state = {
        count: 0
    } 

    render() { 
        return (
            <div className='div'>{state.count}</div>
        );
    }
}
 
export default Body;