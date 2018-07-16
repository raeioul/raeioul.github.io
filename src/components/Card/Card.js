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
        <Back matched={props.matched} />
        <Front image={props.image} matched={props.matched} />
      </Card>
    </Wrapper>
  );
};

export default Square;
