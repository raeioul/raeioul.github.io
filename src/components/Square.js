// @flow
import React from 'react';
import { Wrapper } from './Square.styles';

type Props = {
  bgImg: string;
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
    console.log(this.props.bgImg);
    return (
      <Wrapper
        onClick={this.handleBoxActivation}
        activated={this.state.activated}
        bgImg={this.props.bgImg}
        Blaaaa
      >
        <div className="card">
          <div className="face front">
            Front
          </div>
          <div className="face back" />
        </div>
      </Wrapper>
    );
  }
}

export default Square;
