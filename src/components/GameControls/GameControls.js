// @flow
import React from 'react';
import { Wrapper, Label, Select, Reset } from './GameControls.styles';

type Props = {
  boardSize: number,
  resizeBoard: (void) => void,
  resetBoard: (void) => void,
};

const GameBoardInputs = (props: Props) => {
  return (
    <Wrapper>
      <Label id="bord-size" htmlFor="board-size">
        Board Size:
      </Label>
      <Select
        name="board-size"
        value={props.boardSize}
        onChange={props.resizeBoard}
      >
        <option value="0">-</option>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="24">24</option>
        <option value="32">32</option>
      </Select>
      <Reset type="submit" onClick={props.resetBoard}>
        Reset Game
      </Reset>
    </Wrapper>
  );
};

export default GameBoardInputs;
