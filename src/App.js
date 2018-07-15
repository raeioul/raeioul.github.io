// @flow
import * as React from 'react';
import _ from 'lodash';
import {
  Wrapper,
  MainHeader,
  SuccessWrapper,
  Success,
  SuccessButton,
} from './App.styles';

import GameControls from './components/GameControls/GameControls';
import GameBoard from './components/GameBoard/GameBoard';

import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.jpg';
import img6 from './assets/images/6.jpg';
import img7 from './assets/images/7.jpg';
import img8 from './assets/images/8.jpg';
import img9 from './assets/images/9.jpeg';
import img10 from './assets/images/10.jpg';
import img11 from './assets/images/11.jpg';
import img12 from './assets/images/12.jpg';
import img13 from './assets/images/13.jpg';
import img14 from './assets/images/14.jpg';
import img15 from './assets/images/15.jpg';
import img16 from './assets/images/16.jpg';

type Props = {};

type State = {
  boardSize: number,
  boardChanged: boolean,
  activeCards: Array<number>,
  images: Array<string>,
  cards: Array<?Object>,
  noTries: number,
  noMatched: number,
};

class App extends React.Component<Props, State> {
  state = {
    boardSize: 4,
    boardChanged: false,
    activeCards: [],
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    ],
    cards: [],
    noTries: 0,
    noMatched: 0,
  };

  componentDidMount() {
    this.populateBoard();
  }

  componentDidUpdate() {
    if (this.state.activeCards.length >= 2) {
      if (this.state.activeCards[0] === this.state.activeCards[1]) {
        this.handleMatchedCards();
      } else {
        setTimeout(this.deactivateAllCards, 1000);
      }
    }

    if (this.state.boardChanged) {
      this.handleResetBoard();
    }
  }

  populateBoard = () => {
    const cards = this.createCards();
    this.setState((prevState) => ({
      ...prevState,
      boardChanged: false,
      cards,
    }));
  };

  shuffleImages = (boardSize) => {
    // Shuffle initial array and make a slice needed
    // to populate board of specified size
    let imgArray = _.shuffle(this.state.images);
    imgArray = imgArray.slice(0, boardSize / 2);

    // Each image appear twice on the board
    const images = [...imgArray, ...imgArray];

    return _.shuffle(images);
  };

  createCards = () => {
    const { boardSize } = this.state;
    const cards = [];
    const images = this.shuffleImages(boardSize);

    for (let i = 0; i < boardSize; i += 1) {
      cards.push({
        id: `${i}`,
        image: images[i],
        isActive: false,
        matched: false,
      });
    }

    return cards;
  };

  deactivateAllCards = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeCards: [],
      cards: prevState.cards.map((card) => {
        const updatedCard = card;
        updatedCard.isActive = false;
        return updatedCard;
      }),
      noTries: prevState.noTries + 1,
    }));
  };

  handleCardActivation = (cardId: string) => {
    const selectedCard = this.state.cards.filter(
      (card) => card.id === cardId,
    )[0];

    // Activate only 2 incactive and not matched cards
    // or do nothing
    if (
      this.state.activeCards.length >= 2 ||
      selectedCard.isActive ||
      selectedCard.matched
    ) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      activeCards: [...prevState.activeCards, selectedCard.image],
      cards: prevState.cards.map((card) => {
        const updatedCard = card;
        if (updatedCard.id === cardId) {
          updatedCard.isActive = true;
        }
        return updatedCard;
      }),
    }));
  };

  handleMatchedCards = () => {
    const updatedCards = this.state.cards.map((card) => {
      const updatedCard = card;
      const isActivated = this.state.activeCards.includes(updatedCard.image);

      if (isActivated) {
        updatedCard.matched = true;
      }

      return updatedCard;
    });

    // TODO: Fix counting matched pairs.
    // Previously I simply incremented noMatched value, but it was a source
    // of a bug - every time matched cards were clicked, counter was incremented
    const updatedNoMatched = updatedCards.reduce(
      (acu, card) => acu + card.matched,
      0,
    );

    this.setState(
      (prevState) => ({
        cards: updatedCards,
        activeCards: [],
        noMatched: updatedNoMatched / 2,
      }),
      this.deactivateAllCards,
    );
  };

  handleBoardSizeChange = (e) => {
    const updatedBoardSize = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      boardSize: updatedBoardSize,
      boardChanged: true,
    }));
  };

  handleResetBoard = () => {
    this.setState(
      (prevState) => ({
        ...prevState,
        activeCards: [],
        noTries: 0,
        noMatched: 0,
      }),
      this.populateBoard,
    );
  };

  render() {
    return (
      <Wrapper>
        <MainHeader>Find the Pair</MainHeader>
        <h4>
          No Tries: {this.state.noTries}; No Matched: {this.state.noMatched}
        </h4>

        <GameControls
          boardSize={this.state.boardSize}
          resizeBoard={this.handleBoardSizeChange}
          resetBoard={this.handleResetBoard}
        />

        <GameBoard
          cardClicked={this.handleCardActivation}
          cards={this.state.cards}
        />

        {this.state.noMatched === this.state.boardSize / 2 &&
          this.state.boardSize > 0 && (
            <SuccessWrapper>
              <Success>You Won!</Success>
              <SuccessButton type="submit" onClick={this.handleResetBoard}>
                Play Again!
              </SuccessButton>
            </SuccessWrapper>
        )}
      </Wrapper>
    );
  }
}

export default App;
