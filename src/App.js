// @flow
import * as React from 'react';
import _ from 'lodash';
import {
  Wrapper,
  Container,
  SuccessWrapper,
  Success,
  SuccessButton,
} from './App.styles';

import Square from './components/Square';
import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.jpg';
import img6 from './assets/images/6.jpg';

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
    images: [img1, img2, img3, img4, img5, img6],
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

    if (this.state.activeCards.length >= 2 || selectedCard.isActive) {
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

    this.setState(
      (prevState) => ({
        cards: updatedCards,
        activeCards: [],
        noMatched: prevState.noMatched + 1,
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

  renderCards = () => {
    return this.state.cards.map((card) => (
      <Square
        key={card.id}
        clicked={() => this.handleCardActivation(card.id)}
        activated={card.isActive}
        matched={card.matched}
        front="?"
        image={card.image}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <h1>Find the Pair</h1>
        <h4>
          No Tries: {this.state.noTries}; No Matched: {this.state.noMatched}
        </h4>
        <div>
          <label id="bord-size" htmlFor="board-size">
            Board Size
          </label>
          <select
            name="board-size"
            value={this.state.boardSize}
            onChange={this.handleBoardSizeChange}
          >
            <option value="0">-</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
          <button type="submit" onClick={this.handleResetBoard}>
            Reset
          </button>
        </div>

        <Container>{this.state.cards && this.renderCards()}</Container>

        {this.state.noMatched === this.state.boardSize / 2 && (
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
