// @flow
import React from 'react';
import { Wrapper } from './Square.styles';

type Props = {
  front: string,
  image: string,
  noActivated: number,
  increaseCounter: (void) => void,
  decreaseCounter: (void) => void,
};

type State = {
  activated: boolean,
};

class Square extends React.Component<Props, State> {
  state = {
    activated: false,
  };

  handleBoxActivation = () => {
    if (this.props.noActivated >= 2 || this.state.activated) {
      return;
    }

    this.props.increaseCounter();

    this.setState(
      () => ({ activated: true }),
      () => setTimeout(() => {
        this.props.decreaseCounter();
        this.setState(() => ({ activated: false }));
      }, 1000),
    );
  };

  handleBoxDeactivation = () => {
    this.setState(
      () => ({ activated: false }),
      () => setTimeout(() => this.props.decreaseCounter(), 1000),
    );
  };

  render() {
    return (
      <Wrapper
        onClick={this.handleBoxActivation}
        activated={this.state.activated}
        bgImg={this.props.image}
      >
        <div className="card">
          <div className="face front">
            <h4>{this.props.front}</h4>
          </div>
          <div className="face back" />
        </div>
      </Wrapper>
    );
  }
}

export default Square;
