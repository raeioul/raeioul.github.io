// @flow
import React from 'react';
import Card from '../Card/Card';
import { Wrapper } from './GameBoard.styles';

type Props = {
  cards: Array<Object>,
  cardClicked: string => void,
};

const GameBoard = (props: Props) => {
  const cards = props.cards.map(card => (
    <Card
      key={card.id}
      clicked={() => props.cardClicked(card.id)}
      activated={card.isActive}
      matched={card.matched}
      image={card.image}
    />
  ));

  return (
    <Wrapper cardNumber={props.cards.length}>
      {props.cards.length > 0 ? cards : <h2>Choose boad&#39;s size</h2>}
    </Wrapper>
  );
};

export default GameBoard;
