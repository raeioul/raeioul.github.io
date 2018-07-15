// @flow
import React from 'react';
import { Wrapper, Card, Front, Back } from './Card.styles';

type Props = {
  image: string,
  activated: boolean,
  matched: boolean,
  clicked: (void) => void,
};

const Square = (props: Props) => {
  return (
    <Wrapper>
      <Card
        onClick={props.clicked}
        matched={props.matched}
        activated={props.activated}
      >
        <span />
        <Front>
          <h4>?</h4>
        </Front>
        <Back bgImg={props.image} matched={props.matched} />
      </Card>
    </Wrapper>
  );
};

export default Square;
