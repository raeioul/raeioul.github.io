// @flow
import React from 'react';
import { Wrapper } from './Square.styles';

type Props = {
  content: string;
};

type State = {
  activated: boolean,
};

class Square extends React.Component<Props, State> {
  state = {
    activated: false,
  };

  handleBoxActivation = () => {
    this.setState(
      () => ({ activated: true }),
      () => setTimeout(() => {
        this.setState(() => ({ activated: false }));
      }, 1000),
    );
  };

  render() {
    return (
      <Wrapper
        onClick={this.handleBoxActivation}
        activated={this.state.activated}
        Blaaaa
      >
        <div className="card">
          <div className="face front">
            Front
          </div>
          <div className="face back">
            Back
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Square;
