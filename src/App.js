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
        <Square bgImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/1200px-Kitten_in_Rizal_Park%2C_Manila.jpg" />
        <Square bgImg="https://www.godspeedanimalcare.com/images/content/rehabilitation-center/doggie-playcare.jpg" />
        <Square bgImg="https://www.zoopraha.cz/images/stavby-expozice/Ostrov_lemuru.jpg" />
      </Container>
    </Wrapper>
  );
};

export default App;
