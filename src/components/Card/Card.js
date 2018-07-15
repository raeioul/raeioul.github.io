// @flow
import React from 'react';
import { Board, Card, Front, Back } from './Card.styles';

type Props = {
  front: string,
  image: string,
  activated: boolean,
  matched: boolean,
  clicked: (void) => void,
};

const Square = (props: Props) => {
  return (
    <Board>
      <Card
        onClick={props.clicked}
        matched={props.matched}
        activated={props.activated}
      >
        <Front>
          <h4>{props.front}</h4>
        </Front>
        <Back bgImg={props.image} matched={props.matched} />
      </Card>
    </Board>
  );
};

export default Square;
