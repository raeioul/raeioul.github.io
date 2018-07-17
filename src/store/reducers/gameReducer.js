import _ from 'lodash';
import {
  POPULATE_BOARD,
  ACTIVATE_CARD,
  DEACTIVATE_ALL_CARDS,
  CHANGE_BOARD_SIZE,
  RESET_BOARD,
} from '../actions/actionTypes';
import initialState from '../initialState';

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_BOARD: {
      const cards = action.createCards(state);
      console.log('action', action);
      console.log('cards', cards);
      return {
        ...state,
        cards,
      };
    }

    default:
      return state;
  }
}

export default gameReducer;
