import _ from 'lodash';
import {
  POPULATE_BOARD,
  SHUFFLE_IMAGES,
  CREATE_CARDS,
  ACTIVATE_CARD,
  DEACTIVATE_ALL_CARDS,
  CHANGE_BOARD_SIZE,
  RESET_BOARD,
} from './actionTypes';

function shuffleImages(boardSize, images) {
  // Shuffle initial array and make a slice needed
  // to populate board of specified size
  let imgArray = _.shuffle(images);
  imgArray = imgArray.slice(0, boardSize / 2);

  // Each image must appear twice on the board
  imgArray = [...imgArray, ...imgArray];

  return _.shuffle(imgArray);
}

function createCards({ boardSize, images }) {
  const cards = [];
  const selectedImages = shuffleImages(boardSize, images);

  for (let i = 0; i < boardSize; i += 1) {
    cards.push({
      id: `${i}`,
      image: selectedImages[i],
      isActive: false,
      matched: false,
    });
  }

  return cards;
}

export function populateBoard() {
  return {
    type: POPULATE_BOARD,
    createCards,
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
