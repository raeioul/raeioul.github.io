// @flow
import React from 'react';
import { SuccessWrapper, Success, SuccessButton } from './SuccessModal.styles';

type Props = {
  resetBoard: (void) => void,
};

const SuccessModal = (props: Props) => {
  return (
    <SuccessWrapper>
      <Success>You Won!</Success>
      <SuccessButton type="submit" onClick={props.resetBoard}>
        Play Again!
      </SuccessButton>
    </SuccessWrapper>
  );
};

export default SuccessModal;
