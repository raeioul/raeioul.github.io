// @flow
import * as React from 'react';
import { Wrapper, Container } from './App.styles';

import Square from './components/Square';

type Props = {};

type State = {
  activeCards: number,
  cards: Array<Object>,
};

class App extends React.Component<Props, State> {
  state = {
    activeCards: 0,
    cards: [
      {
        id: '1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/1200px-Kitten_in_Rizal_Park%2C_Manila.jpg',
        isActive: false,
      },
      {
        id: '2',
        image:
          'https://www.godspeedanimalcare.com/images/content/rehabilitation-center/doggie-playcare.jpg',
        isActive: false,
      },
      {
        id: '3',
        image:
          'https://www.zoopraha.cz/images/stavby-expozice/Ostrov_lemuru.jpg',
        isActive: false,
      },
      {
        id: '4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhh3OAq-MEt992I4kTute1hd8FUsc1cjqjKHOZrWkihw8M8aq',
        isActive: false,
      },
      {
        id: '5',
        image:
          'http://cdn0.wideopenpets.com/wp-content/uploads/2018/02/Untitled-design-11-770x405.png',
        isActive: false,
      },
    ],
  };

  componentDidUpdate() {
    if (this.state.activeCards >= 2) {
      setTimeout(this.deactivateAllCards, 2000);
    }
  }

  deactivateAllCards = () => {
    this.setState((prevState) => ({
      ...prevState,
      activeCards: 0,
      cards: prevState.cards.map((card) => {
        const updatedCard = card;
        updatedCard.isActive = false;
        return updatedCard;
      }),
    }));
  };

  handleBoxActivation = (cardId: string) => {
    const selectedCard = this.state.cards.filter(
      (card) => card.id === cardId,
    )[0];

    if (this.state.activeCards >= 2 || selectedCard.isActive) {
      return;
    }

    this.setState(
      (prevState) => ({
        ...prevState,
        activeCards: prevState.activeCards + 1,
        cards: prevState.cards.map((card) => {
          const updatedCard = card;
          if (updatedCard.id === cardId) {
            updatedCard.isActive = true;
          }
          return updatedCard;
        }),
      })
    );
  };

  renderCards = () => {
    return this.state.cards.map((card) => (
      <Square
        key={card.id}
        clicked={() => this.handleBoxActivation(card.id)}
        noActivated={this.state.activeCards}
        activated={card.isActive}
        front={card.id}
        image={card.image}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <h1>Find the Difference</h1>
        <Container>{this.renderCards()}</Container>
      </Wrapper>
    );
  }
}

export default App;
