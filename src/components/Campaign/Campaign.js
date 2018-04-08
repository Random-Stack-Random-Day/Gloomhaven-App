import React, { Component } from 'react';
import Character from './Characters/Characters';

class Campaign extends Component {
    state = {
        characters: null

    }
    render() {
        return (
            <div>
                <Character />        
            </div>
        );
    }
}

export default Campaign;