import {
  POPULATE_BOARD,
  ACTIVATE_CARD,
  CARDS_MATCHED,
  DEACTIVATE_ALL_CARDS,
  CHANGE_BOARD_SIZE,
  RESET_BOARD,
} from '../actions/actionTypes';
import initialState from '../initialState';

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_CARD: {
      const selectedCard = state.cards.filter(
        card => card.id === action.cardId,
      )[0];

      // Activate only 2 incactive and not matched cards
      // or do nothing
      if (
        state.activeCards.length >= 2 ||
        selectedCard.isActive ||
        selectedCard.matched
      ) {
        return state; // FIXME: This whole ugly thing
      }

      const cards = state.cards.map(card => {
        const updatedCard = card;
        if (updatedCard.id === action.cardId) {
          updatedCard.isActive = true;
        }
        return updatedCard;
      });

      return {
        ...state,
        activeCards: [...state.activeCards, selectedCard.image],
        cards,
      };
    }
    case CARDS_MATCHED: {
      const updatedCards = state.cards.map(card => {
        const updatedCard = card;
        const isActivated = state.activeCards.includes(updatedCard.image);

        if (isActivated) {
          updatedCard.matched = true;
        }

        return updatedCard;
      });

      // TODO: Fix counting matched pairs.
      // Previously I simply incremented noMatched value,
      // but it was a source of a bug - every time matched cards
      // were clicked, counter was incremented.
      const updatedNoMatched = updatedCards.reduce(
        (acu, card) => acu + card.matched,
        0,
      );

      return {
        ...state,
        cards: updatedCards,
        noMatched: updatedNoMatched / 2,
      };
    }
    case DEACTIVATE_ALL_CARDS: {
      const updatedCards = state.cards.map(card => {
        const updatedCard = card;
        updatedCard.isActive = false;
        return updatedCard;
      });

      return {
        ...state,
        activeCards: [],
        cards: updatedCards,
        noTries: state.noTries + 1,
      };
    }

    case POPULATE_BOARD:
      return {
        ...state,
        cards: action.createCards(state),
      };
    case CHANGE_BOARD_SIZE:
      return {
        ...state,
        boardSize: action.boardSize,
        boardChanged: true,
      };
    case RESET_BOARD:
      return {
        ...state,
        activeCards: [],
        cards: action.createCards(state),
        noTries: 0,
        noMatched: 0,
      };
    default:
      return state;
  }
}

export default gameReducer;
