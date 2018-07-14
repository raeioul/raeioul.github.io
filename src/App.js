// @flow
import React from 'react';
import { Wrapper, Container } from './App.styles';

import Square from './components/Square';

type Props = {};

const App = (props: Props) => {
  return (
    <Wrapper>
      <h1>Find the Difference</h1>
      <Container>
        <Square content="&#9824;" />
        <Square content="&#9824;" />
        <Square content="&#9824;" />
      </Container>
    </Wrapper>
  );
};

export default App;
