import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Pokedex from '../../pokedex/containers/pokedex';

class Home extends Component {
  render() {
    return(
      <HomeLayout>
        <h1>Pokémon List</h1>
        <Pokedex />
      </HomeLayout>
    )
  }
}

export default Home;