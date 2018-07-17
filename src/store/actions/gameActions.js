import {
  POPULATE_BOARD,
  SHUFFLE_IMAGES,
  CREATE_CARDS,
  ACTIVATE_CARD,
  DEACTIVATE_ALL_CARDS,
  CHANGE_BOARD_SIZE,
  RESET_BOARD,
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

export function changeBoardSize(newSize) {
  return {
    type: CHANGE_BOARD_SIZE,
    size: newSize,
  };
}

export function resetBoard() {
  return {
    type: RESET_BOARD,
  };
}
