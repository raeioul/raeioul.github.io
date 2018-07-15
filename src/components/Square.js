// @flow
import React from 'react';
import { Wrapper, Board, Card, Front, Back } from './Square.styles';

type Props = {
  front: string,
  image: string,
  activated: boolean,
  matched: boolean,
  clicked: (void) => void,
};

const Square = (props: Props) => {
  return (
    <Wrapper>
      <Board>
        <Card
          onClick={props.clicked}
          matched={props.matched}
          activated={props.activated}
        >
          <Front>
            <h4>{props.front}</h4>
          </Front>
          <Back bgImg={props.image} />
        </Card>
      </Board>
    </Wrapper>
  );
};

export default Square;
