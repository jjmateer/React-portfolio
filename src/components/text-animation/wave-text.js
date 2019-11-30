import React from 'react';
import { Wave } from 'react-animated-text';

export default class WaveText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Wave 
            text={this.props.text} 
            effect="pop" 
            effectChange={1.1} 
            />
        );
    }
}
