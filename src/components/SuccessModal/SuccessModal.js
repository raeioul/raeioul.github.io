// @flow
import React from 'react';
import {
  Wrapper,
  Backdrop,
  SuccessWrapper,
  Success,
  SuccessButton,
} from './SuccessModal.styles';

type Props = {
  resetBoard: (void) => void,
};

const SuccessModal = (props: Props) => {
  return (
    <Wrapper>
      <Backdrop />
      <SuccessWrapper>
        <Success>You Won!</Success>
        <SuccessButton type="submit" onClick={props.resetBoard}>
          Play Again!
        </SuccessButton>
      </SuccessWrapper>
    </Wrapper>
  );
};

export default SuccessModal;
