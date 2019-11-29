import React from 'react';
import { Random } from 'react-animated-text';

export default class AnimatedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paused: true, randomNumber: this.randomNumber() };
    this.togglePause = this.togglePause.bind(this);
  }
  componentDidMount(){
    this.togglePause();
  }
  randomNumber() {
    return Math.round(Math.random() * (1000000000 - 100000000) + 100000000).toString();
  }

  togglePause() {
    this.setState(prevState => ({ paused: !prevState.paused, randomNumber: this.randomNumber() }));
  }

  render() {
    return (
        <Random
          text={this.props.text}
          paused={this.state.paused}
          iterations={1}
          effectDuration={0.2}
          effect="fadeIn"
          effectChange={4}
          effectDirection="up"
          delay={1}
        />
    );
  }
}
