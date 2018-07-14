// @flow
import React from 'react';
import { Wrapper } from './Square.styles';

type Props = {
  front: string,
  image: string,
  activated: boolean,
  clicked: (void) => void,
};

// type State = {
//   activated: boolean,
// };

const Square = (props: Props) => {
  return (
    <Wrapper
      onClick={props.clicked}
      activated={props.activated}
      bgImg={props.image}
    >
      <div className="card">
        <div className="face front">
          <h4>{props.front}</h4>
        </div>
        <div className="face back" />
      </div>
    </Wrapper>
  );
};

export default Square;
