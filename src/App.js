// @flow
import * as React from 'react';
import _ from 'lodash';
import { Wrapper, Container } from './App.styles';

import Square from './components/Square';
import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.jpg';
import img6 from './assets/images/6.jpg';

type Props = {};

type State = {
  activeCards: number,
  images: Array<string>,
  cards: Array<?Object>,
};

class App extends React.Component<Props, State> {
  state = {
    boardSize: 0,
    boardChanged: false,
    activeCards: 0,
    images: [img1, img2, img3, img4, img5, img6],
    cards: [],
  };

  componentDidMount() {
    this.populateBoard();
  }

  componentDidUpdate() {
    if (this.state.activeCards >= 2) {
      setTimeout(this.deactivateAllCards, 1000);
    }

    if (this.state.boardChanged) {
      this.populateBoard();
    }
  }

  populateBoard = () => {
    const cards = this.createCards();
    this.setState((prevState) => ({
      ...prevState,
      boardChanged: false,
      cards,
    }));
  }

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
      });
    }

    return cards;
  };

  deactivateAllCards = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeCards: 0,
      cards: prevState.cards.map((card) => {
        const updatedCard = card;
        updatedCard.isActive = false;
        return updatedCard;
      }),
    }));
  };

  handleBoxActivation = (cardId: string) => {
    const selectedCard = this.state.cards.filter(
      (card) => card.id === cardId,
    )[0];

    if (this.state.activeCards >= 2 || selectedCard.isActive) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      activeCards: prevState.activeCards + 1,
      cards: prevState.cards.map((card) => {
        const updatedCard = card;
        if (updatedCard.id === cardId) {
          updatedCard.isActive = true;
        }
        return updatedCard;
      }),
    }));
  };

  handleBoardSizeChange = (e) => {
    const updatedBoardSize = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      boardSize: updatedBoardSize,
      boardChanged: true,
    }));
  };

  renderCards = () => {
    return this.state.cards.map((card) => (
      <Square
        key={card.id}
        clicked={() => this.handleBoxActivation(card.id)}
        noActivated={this.state.activeCards}
        activated={card.isActive}
        front="?"
        image={card.image}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <h1>Find the Pair</h1>
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
        </div>

        <Container>{this.state.cards && this.renderCards()}</Container>
      </Wrapper>
    );
  }
}

export default App;
