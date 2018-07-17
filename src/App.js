// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  populateBoard,
  activateCard,
  cardsMatched,
  deactivateAllCards,
  changeBoardSize,
  resetBoard,
} from './store/actions';

import { Wrapper, MainHeader } from './App.styles';

import GameControls from './components/GameControls/GameControls';
import GameBoard from './components/GameBoard/GameBoard';
import SuccessModal from './components/SuccessModal/SuccessModal';

type Props = {
  activeCards: Array<number>,
  activateCard: string => void,
  boardChanged: boolean,
  boardSize: number,
  cards: Array<Object>,
  cardsMatched: void => void,
  changeBoardSize: string => void,
  deactivateAllCards: void => void,
  noMatched: number,
  noTries: number,
  populateBoard: void => void,
  resetBoard: void => void,
};

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.populateBoard();
  }

  componentDidUpdate() {
    if (this.props.activeCards.length >= 2) {
      if (this.props.activeCards[0] === this.props.activeCards[1]) {
        this.handleMatchedCards();
      } else {
        setTimeout(this.props.deactivateAllCards, 1000);
      }
    }

    if (this.props.boardChanged) {
      this.props.resetBoard();
    }
  }

  handleMatchedCards = () => {
    this.props.cardsMatched();
    this.props.deactivateAllCards();
  };

  handleBoardSizeChange = (e: ?SyntheticEvent<HTMLInputElement>) => {
    if (e) {
      const updatedBoardSize = e.currentTarget.value;
      this.props.changeBoardSize(updatedBoardSize);
    }
  };

  handleBoardReset = () => {
    this.props.resetBoard();
    this.props.populateBoard();
  }

  render() {
    const playerWon =
      this.props.noMatched === this.props.boardSize / 2 &&
      this.props.boardSize > 0;

    return (
      <Wrapper>
        <MainHeader>Find the Pair</MainHeader>
        <h4 style={{ color: 'var(--dust)', fontSize: '2rem' }}>
          Tries: {this.props.noTries} :: Matched: {this.props.noMatched}
        </h4>

        <GameControls
          boardSize={this.props.boardSize}
          resizeBoard={this.handleBoardSizeChange}
          resetBoard={this.handleBoardReset}
        />

        <GameBoard
          cardClicked={this.props.activateCard}
          cards={this.props.cards}
        />

        {playerWon && <SuccessModal resetBoard={this.handleBoardReset} />}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    boardSize: state.game.boardSize,
    boardChanged: state.game.boardChanged,
    activeCards: state.game.activeCards,
    cards: state.game.cards,
    noTries: state.game.noTries,
    noMatched: state.game.noMatched,
  };
}

export default connect(
  mapStateToProps,
  {
    populateBoard,
    activateCard,
    cardsMatched,
    deactivateAllCards,
    changeBoardSize,
    resetBoard,
  },
)(App);
