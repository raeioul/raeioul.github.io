// @flow
import React from 'react';

type Props = {
  boardSize: number,
  resizeBoard: (void) => void,
  resetBoard: (void) => void,
};

const GameBoardInputs = (props: Props) => {
  return (
    <div>
      <label id="bord-size" htmlFor="board-size">
        Board Size
      </label>
      <select
        name="board-size"
        value={props.boardSize}
        onChange={props.resizeBoard}
      >
        <option value="0">-</option>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="32">32</option>
      </select>
      <button type="submit" onClick={props.resetBoard}>
        Reset
      </button>
    </div>
  );
};

export default GameBoardInputs;
