import {
  POPULATE_BOARD,
  SHUFFLE_IMAGES,
  CREATE_CARDS,
  ACTIVATE_CARD,
  DEACTIVATE_ALL_CARDS,
} from './actionTypes';

export function populateBoard() {
  return {
    type: POPULATE_BOARD,
  };
}

export function shuffleImages() {
  return {
    type: SHUFFLE_IMAGES,
  };
}

export function createCards() {
  return {
    type: CREATE_CARDS,
  };
}

export function activateCard(cardId) {
  return {
    type: ACTIVATE_CARD,
    cardId,
  };
}

export function deactivateAllCards() {
  return {
    type: DEACTIVATE_ALL_CARDS,
  };
}
